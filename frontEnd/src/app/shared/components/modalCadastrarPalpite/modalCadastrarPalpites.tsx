
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { BodyModal, ContainerDados, HeaderModal } from './style';
import { ButtonCadastrar } from '../../../pages/jogadores/style';
import { MdCached } from 'react-icons/md';
import dayjs from 'dayjs';
import type { IObterParticipantesData } from '../../services/ApiServiceBolao/ControllerParticipantesBolao/obterParticipantesBolao';
import type { IObterBolaoData } from '../../services/ApiServiceBolao/ControllerBolao/ObterBolao/obterBolao';
import { ApiServiceBolao } from '../../services/ApiServiceBolao';
import type { IObterPartidasData } from '../../services/ApiServiceBolao/ControllerPartidas/obterPartidas';
import { useEffect, useState } from 'react';
import type { IObterPalpiteJogadorData } from '../../services/ApiServiceBolao/PalpitesController/obterPalpitesJogador/obterPalpiteJogador';
import SelectBase, { type ITimeSelecionado } from '../Select/select';
import { toast } from 'react-toastify';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 350,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 5,
};

export interface IModalListarBolaoProps {
    openModal: boolean;
    closeModal: () => void;
    onSuccess: () => void;
    dadosJogador: IObterParticipantesData;
    dadosBolao: IObterBolaoData
}

export default function ModalCadastrarPalpites({
    closeModal,
    openModal,
    onSuccess,
    dadosJogador,
    dadosBolao
}: IModalListarBolaoProps) {

    const dataDeHoje = dayjs().format("YYYY-MM-DD")

    const [
        dadosPartidas,
        setDadosPartidas
    ] = useState<IObterPartidasData[]>([])

    const [
        opcaoSelecionada,
        setOpcaoSelecionada
    ] = useState<IObterPartidasData>({} as IObterPartidasData)

    const [
        palpiteSelecionado,
        setPalpiteSelecionado
    ] = useState<ITimeSelecionado>({} as ITimeSelecionado)

    const handleLimparCampoPalpite = () => {
        setPalpiteSelecionado({
            id: null,
            nome: ""
        })
    }


    const handleObterPartidas = async () => {
        try {
            const response = await ApiServiceBolao.ControllerPartidas.ObterPartidas(
                dadosBolao.idBolao
            )
            setDadosPartidas(response)
        } catch (error) {

        }
    }
    const CadastrarPalpites = async () => {
        try {
            const response = await ApiServiceBolao.ControllerPalpites.CadastrarPalpiteJogador({
                idpartida: opcaoSelecionada.idPartida,
                idParticipanteBolao: dadosJogador.idParticipanteBolao,
                timePalpite: Number(palpiteSelecionado.id)
            })
            onSuccess()
            toast.success("Palpite cadastrado com sucesso!")
            handleLimparCampoPalpite()
            return response
        } catch (error) {
            toast.error("Erro ao cadastrar o palpite")
        }
    }

    useEffect(() => {
        console.log("Dados partida", opcaoSelecionada.idPartida)
    }, [opcaoSelecionada])

    useEffect(() => {
        handleObterPartidas()
    }, [])


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={closeModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>


                        <HeaderModal>
                            <h2>Cadastrar Palpites</h2>
                        </HeaderModal>
                        <BodyModal>
                            <ContainerDados>
                                <SelectBase
                                    dados={dadosPartidas}
                                    label='Selecione a partida :'
                                    opcaoSelecionada={opcaoSelecionada}
                                    setOpcaoSelecionada={setOpcaoSelecionada}
                                    classNameSelect='selectPartida'
                                    classNameLabel='labelSelect'
                                    tipoSelect={1}
                                />

                                <SelectBase
                                    label='Selecione o Palpite'
                                    tipoSelect={2}
                                    dados={dadosPartidas}
                                    partidaSelecionada={opcaoSelecionada}
                                    opcaoSelecionadaPalpite={palpiteSelecionado}
                                    setOpcaoSelecionadaPalpite={setPalpiteSelecionado}
                                    setOpcaoSelecionada={() => { }}
                                    classNameSelect='selectPartida'
                                    classNameLabel='labelSelect'

                                />
                            </ContainerDados>
                            <ButtonCadastrar
                                className='botaoVincularParticipantes'
                                onClick={() => {
                                    CadastrarPalpites()
                                }}
                            >
                                Cadastrar Palpites
                                <MdCached
                                    size={30}
                                />
                            </ButtonCadastrar>
                        </BodyModal>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

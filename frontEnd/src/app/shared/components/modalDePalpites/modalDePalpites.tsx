
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
import ModalCadastrarPalpites from '../modalCadastrarPalpite/modalCadastrarPalpites';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 500,
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

export default function ModalDePalpites({
    closeModal,
    openModal,
    onSuccess,
    dadosJogador,
    dadosBolao
}: IModalListarBolaoProps) {

    const [
        modalCadastrarPalpitesEstaAberta,
        setModalCadastrarPalpitesEstaAberta
    ] = useState(false)

    const [
        dadosPartidas,
        setDadosPartidas
    ] = useState<IObterPartidasData[]>([])
    const [
        dadosPalpites,
        setDadosPalpites
    ] = useState<IObterPalpiteJogadorData[]>([])

    const handleObterPartidas = async () => {
        try {
            const response = await ApiServiceBolao.ControllerPartidas.ObterPartidas(
                dadosBolao.idBolao
            )
            setDadosPartidas(response)
        } catch (error) {

        }
    }
    const handleObterPalpites = async () => {
        try {
            const response = await ApiServiceBolao.ControllerPalpites.ObterPalpiteJogador({
                idJogadorBolao: dadosJogador.idParticipanteBolao
            })
            setDadosPalpites(response)
        } catch (error) {

        }
    }

    useEffect(() => {
        handleObterPalpites()
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
                            <h2>Painel de palpites</h2>
                        </HeaderModal>
                        <BodyModal>
                            <ContainerDados>
                                <h3>Participante: {dadosJogador.nome.toUpperCase()}</h3>
                                {dadosPalpites.length === 0 ? (
                                    <>
                                    <h2>Ainda não foi vinculado nenhum palpite para este participante, clique em Cadastrar!</h2>
                                    </>
                                ) : dadosPalpites.map((item) => (
                                    
                                    <div className='containerPalpite'>
                                        <span>{item.Time1} vs {item.Time2}</span> - <span>{item.TimePalpite}</span>
                                    </div>
                                ))}
                            <ButtonCadastrar
                                className='botaoVincularParticipantes'
                                onClick={() => setModalCadastrarPalpitesEstaAberta(true)}
                            >
                                Cadastrar Palpites
                                <MdCached
                                    size={30}
                                />
                            </ButtonCadastrar>
                            </ContainerDados>
                        </BodyModal>
                        {modalCadastrarPalpitesEstaAberta && (
                            <ModalCadastrarPalpites

                                openModal={modalCadastrarPalpitesEstaAberta}
                                closeModal={() => setModalCadastrarPalpitesEstaAberta(false)}
                                dadosBolao={dadosBolao}
                                dadosJogador={dadosJogador}
                                onSuccess={handleObterPalpites}

                            />
                        )}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

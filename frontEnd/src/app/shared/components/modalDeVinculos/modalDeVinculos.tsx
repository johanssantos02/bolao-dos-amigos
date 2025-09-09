
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { ApiServiceBolao } from '../../services/ApiServiceBolao';
import type { IObterBolaoData } from '../../services/ApiServiceBolao/ControllerBolao/ObterBolao/obterBolao';
import { BodyModal, ContainerDados, ContainerInputsInline, HeaderModal, Li, Ul } from './style';
import type { ITipoDeVinculoProps } from '../../../pages/paginaInicial/paginaInicial';
import InputComSugestao from '../InputComSugestao';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import type { IListarTimesData } from '../../services/ApiServiceBolao/ControllerTimes/ListarTimes/listarTimes';
import { InputData } from '../imputData/inputData';
import { ButtonCadastrar } from '../../../pages/jogadores/style';
import { MdCached } from 'react-icons/md';
import dayjs from 'dayjs';
import type { IObterJogadoresData } from '../../services/ApiServiceBolao/ControllerJogadores/obterJogadores/obterJogadores';
import type { IListarJogadorBolaoData } from '../../services/ApiServiceBolao/ControllerJogadores/listarJogadoresBolao/listarJogadoresBolao';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 5,
};
const stylePartida = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 380,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 10,
};

export interface IModalListarBolaoProps {
    openModal: boolean;
    closeModal: () => void;
    tipoDeVinculo: ITipoDeVinculoProps,
    dadosBolao: IObterBolaoData,
    onSuccess: () => void;
}

export default function ModalDeVinculos({
    closeModal,
    openModal,
    tipoDeVinculo,
    dadosBolao,
    onSuccess
}: IModalListarBolaoProps) {

    const dataDeHoje = dayjs().format("YYYY-MM-DD")

    const [
        dadosTimes,
        setDadosTimes
    ] = useState<IListarTimesData[]>([])
    const [
        dadosTimesFiltrados,
        setDadosTimesFiltrados
    ] = useState<IListarTimesData[]>([])

    const [
        dataDojogo,
        setDataDoJogo
    ] = useState(dataDeHoje)

    const [
        time01,
        setTime01
    ] = useState<IListarTimesData>({
        IdTime: 0,
        NomeTime: ""
    })

    const [
        time02,
        setTime02
    ] = useState<IListarTimesData>({
        IdTime: 0,
        NomeTime: ""
    })

    const [
        listaDeParticipantes,
        setListaDeParticipantes
    ] = useState<number[]>([])

    const [
        participantes,
        setParticipantes
    ] = useState<IObterJogadoresData[]>([])

    const handleObterTimes = async () => {
        try {
            const response = await ApiServiceBolao.ControllerTimes.ListarTimes()

            toast.success("Deu certo")
            setDadosTimes(response)
            return response
        } catch (error) {
            console.log("Ërro ao obter times", error)
        }
    }

    const handleVincularPartidas = async () => {

        if(time01.IdTime === time02.IdTime) return toast.warn("Não é possivel vincular uma partida com os times iguais")
        try {
            const response = await ApiServiceBolao.ControllerPartidas.CadastrarPartidas({
                idBolao: dadosBolao.idBolao,
                t1: time01.IdTime,
                t2: time02.IdTime,
                dataPartida: dataDojogo,
                resultadopartida: null,
                vencedorIdTime: null
            })

            toast.success("Partida Vinculada com sucesso!")
            handleLimparCampos()
            onSuccess()

        } catch (error) {
            toast.error("Erro ao vincular partida")
        }
    }

    const handleObterJogadores = async () => {
        try {
            const response = await ApiServiceBolao.ControllerJogadores.ObterJogadores()
            if (response) {
                setParticipantes(response)
            }
            return response
        } catch (error) {
            toast.error("error")
        }
    }

    const VincularParticipantes = async () => {
        try {
            const response = ApiServiceBolao.ControllerParticipantesBolao.VincularParticipantesBolao({
                idBolao: dadosBolao.idBolao,
                jogadores: listaDeParticipantes
            })
            toast.success("Participantes Vinculados com sucesso!")
            onSuccess()
        } catch (error) {
            console.log(error)
        }
    }

    const handleLimparCampos = () => {
        setTime01({
            IdTime: 0,
            NomeTime: ""
        })
        setTime02({
            IdTime: 0,
            NomeTime: ""
        })
    }

    useEffect(() => {
        setDadosTimesFiltrados(dadosTimes.filter((t) => t.IdTime !== 0))
    }, [dadosTimes])

    useEffect(() => {
        handleObterTimes()
    }, [])
    useEffect(() => {
        handleObterJogadores()
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
                    <Box sx={tipoDeVinculo.idVinculo === 1 ? stylePartida : style}>
                        {tipoDeVinculo.idVinculo === 1 ? (
                            <>
                                <HeaderModal>
                                    <h2>Vincular {tipoDeVinculo.nomeVinculo}</h2>
                                </HeaderModal>
                                <BodyModal>
                                    <ContainerInputsInline>
                                        <InputComSugestao<IListarTimesData>
                                            dadosOpcoes={dadosTimesFiltrados}
                                            label='Time 1'
                                            value={time01}
                                            getOptionLabel={(option) => option.NomeTime}
                                            onChange={(e) => setTime01(e!)}
                                        >

                                        </InputComSugestao>
                                        <InputComSugestao<IListarTimesData>
                                            dadosOpcoes={dadosTimesFiltrados}
                                            label='Time 2'
                                            value={time02}
                                            getOptionLabel={(option) => option.NomeTime}
                                            onChange={(e) => setTime02(e!)}
                                        >

                                        </InputComSugestao>
                                        <InputData
                                            label='Data do jogo :'
                                            type='date'
                                            value={dataDojogo}
                                            onChange={(e) => setDataDoJogo(e.target.value)}

                                        />
                                    </ContainerInputsInline>
                                    <ButtonCadastrar
                                        className='botaoVincularJogo'
                                        onClick={handleVincularPartidas}
                                    >
                                        Vincular Jogo
                                        <MdCached
                                            size={30}
                                        />
                                    </ButtonCadastrar>
                                </BodyModal>
                            </>
                        ) : tipoDeVinculo.idVinculo === 2 ? (
                            <>
                                <HeaderModal>
                                    <h2>Vincular Participante</h2>
                                </HeaderModal>
                                <BodyModal>
                                    <ContainerDados>
                                        {participantes.map((item, index) => (
                                            <Ul
                                                key={index}
                                                onClick={() => {
                                                    if (listaDeParticipantes.includes(item.idJogador)) {
                                                        // Se estiver, remove o item da lista
                                                        setListaDeParticipantes(listaDeParticipantes.filter(id => id !== item.idJogador));
                                                    } else {
                                                        // Se não estiver, adiciona o item à lista
                                                        setListaDeParticipantes([...listaDeParticipantes, item.idJogador]);
                                                    }
                                                }}
                                                style={{
                                                    // Verifica se o item.id está na lista para definir a cor de fundo
                                                    backgroundColor: listaDeParticipantes.includes(item.idJogador) ? "yellow" : undefined
                                                }}
                                            >
                                                <Li

                                                >{item.nome}</Li>
                                            </Ul>
                                        ))}
                                    </ContainerDados>
                                    <ButtonCadastrar
                                        className='botaoVincularParticipantes'
                                        onClick={VincularParticipantes}
                                    >
                                        Vincular Participantes
                                        <MdCached
                                            size={30}
                                        />
                                    </ButtonCadastrar>
                                </BodyModal>
                            </>
                        ) : null}

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

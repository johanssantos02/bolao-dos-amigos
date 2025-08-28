
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { toast } from 'react-toastify';
import { ApiServiceBolao } from '../../services/ApiServiceBolao';
import React, { useEffect, useState } from 'react';
import type { IObterBolaoData } from '../../services/ApiServiceBolao/ControllerBolao/ObterBolao/obterBolao';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
};

export interface IModalListarBolaoProps {
    openModal: boolean;
    closeModal: () => void;
    selecionarBolao:  React.Dispatch<React.SetStateAction<IObterBolaoData>>;
}

export default function ModalListaDeBolao({
    closeModal,
    openModal,
    selecionarBolao
}: IModalListarBolaoProps) {

    const [
        dadosBolao,
        setDadosBolao
    ] = useState<IObterBolaoData[]>([])

    const handleObterListagemDeBolao = async () => {
        try {
            const response = await ApiServiceBolao.ControllerBolao.ObterBolao()
            setDadosBolao(response)
        } catch (error) {
            toast.error("Erro ao obter listagem dos boloes")
            return console.error(error)
        }
    }

    useEffect(() => {
        handleObterListagemDeBolao()
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
                        {dadosBolao.map((b, index) => (
                            <ul key={index}>
                                <li
                                onClick={() => selecionarBolao(b)}
                                >{b.nomeBolao}</li>
                            </ul>
                        ))}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

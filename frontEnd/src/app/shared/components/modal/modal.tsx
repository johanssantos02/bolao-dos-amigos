import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { ButtonConfirmarCadastro, HeaderModal, Input, InputComLabel, Label } from './style';
import { ContainerButton } from '../../../pages/jogadores/style';
import { useState } from 'react';
import { ApiServiceBolao } from '../../services/ApiServiceBolao';
import { toast } from 'react-toastify';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 250,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 5,
};

export interface IModalProps {
    openModal: boolean;
    closeModal: () => void;
    onSucess: () => void
}

export default function ModalCadastrar({
    closeModal,
    onSucess,
    openModal
}: IModalProps) {

    const [
        nome,
        setNome
    ] = useState('')


    const handleCadastrarNovoJogador = async() => {
        try {
            const response = await ApiServiceBolao.ControllerJogadores.CadastrarJogadores({
                nome: nome
            })
            toast.success('Jogador cadastrado com sucesso')
            onSucess()
            closeModal()
            return;
        } catch (error) {
            toast.error('Erro ao cadastrar um novo Jogador!')
            return console.error(error)
        }
    }


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
                            <h2>Cadastrar um novo jogador</h2>
                        </HeaderModal>
                        <InputComLabel>
                            <Label>
                                Nome Jogador :
                            </Label>
                            <Input
                                onChange={(e) => setNome(e.target.value)}
                            >

                            </Input>
                        </InputComLabel>
                        <ContainerButton>
                            <ButtonConfirmarCadastro
                            onClick={() => {
                                handleCadastrarNovoJogador()
                            }}
                            >
                                Cadastrar
                            </ButtonConfirmarCadastro>
                        </ContainerButton>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

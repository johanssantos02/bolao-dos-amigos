import { Api } from "../../../api";

export interface ICadastrarPalpiteJogador {
    idpartida: number;
    idParticipanteBolao: number;
    timePalpite: number;
}

export const CadastrarPalpiteJogador = async (
    params: ICadastrarPalpiteJogador
) => {
    try {
        const response = Api.post("/palpites/cadastrar-palpite", params)

        return response
    } catch (error) {
        throw error;
    }
}
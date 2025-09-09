import { Api } from "../../../api"


export interface IAtualizarVencedorProps {
    idPartida: number;
    vencedorIdTime: number
}


export const AtualizarVencedor = async (
    params: IAtualizarVencedorProps
) => {
    try {
        const response = await Api.put(`/partidas/atualizar-vencedor`, params)

        return response.data
    } catch (error) {
        throw error
    }
}
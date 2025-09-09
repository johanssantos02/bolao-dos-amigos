import { Api } from "../../../api"


export interface ICadastrarPartidasProps {
    t1: number,
    t2: number,
    dataPartida: string,
    idBolao: number,
    resultadopartida: number | null,
    vencedorIdTime: number | null
}


export const CadastrarPartidas = async (
    params: ICadastrarPartidasProps
) => {
    try {
        const response = await Api.post(`/partidas/cadastrar-partidas`, params)

        return response.data
    } catch (error) {
        throw error
    }
}
import { Api } from "../../../api"


export interface IObterPartidasData {
    idPartida: number,
    t1: number,
    nomeTime1: string,
    t2: number,
    nomeTime2: string,
    dataPartida: string,
    resultadopartida: string | null,
    vencedorIdTime: number | null,
    idBolao: number
}



export const ObterPartidas = async (
    idBolao: number
): Promise<IObterPartidasData[]> => {
    try {
        const response = await Api.get(`/partidas/obter-partidas?idBolao=${idBolao}`)

        return response.data
    } catch (error) {
        throw error
    }
}
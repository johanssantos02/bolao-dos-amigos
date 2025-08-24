import { ApiServiceBolao } from "../.."
import { Api } from "../../../api"


export interface IObterApostasData{
    id: number,
    dataAposta: string,
    resultadoAposta: string,
    fechado: number
}

export const ObterApostas = async(

): Promise<IObterApostasData[]> => {

    try {
        const response = await Api.get<IObterApostasData[]>("/apostas")

        return response.data
    } catch (error) {
       console.log('Erro ao obter dados das apostas')
    }
}
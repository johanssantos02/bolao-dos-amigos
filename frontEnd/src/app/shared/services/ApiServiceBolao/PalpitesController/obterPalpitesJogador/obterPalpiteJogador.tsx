import { Api } from "../../../api"


export interface IObterPalpiteJogadorData {
    id: number,
    dataPalpite: string,
    idParticipanteBolao: number,
    idPartida: number,
    dataPartida: string,
    Time1: string,
    Time2: string,
    TimePalpite: string
}

export interface IObterPalpiteJogadorProps{
    idJogadorBolao: number
}

export const ObterPalpiteJogador = async (
    params: IObterPalpiteJogadorProps
): Promise<IObterPalpiteJogadorData[]> => {

    try {
        const response = await Api.get("/palpites/obter-palpites-jogador", {params})

        return response.data
    } catch (error) {
     console.log('Erro ao obter dados das apostas', error)
     throw error

    }
}
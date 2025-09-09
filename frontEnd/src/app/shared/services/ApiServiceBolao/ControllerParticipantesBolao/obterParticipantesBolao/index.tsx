import { Api } from "../../../api"


export interface IObterParticipantesData {
    idParticipanteBolao: number,
    nome: string
}



export const ObterParticipantesDoBolao = async (
    idBolao: number
): Promise<IObterParticipantesData[]> => {
    try {
        const response = await Api.get(`/participantesBolao/listar-participantes?idBolao=${idBolao}`)

        return response.data
    } catch (error) {
        throw error
    }
}
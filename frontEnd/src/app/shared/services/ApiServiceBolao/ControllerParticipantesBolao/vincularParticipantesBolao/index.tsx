import { Api } from "../../../api"




export interface IVincularParticipantesBolaoProps{
    jogadores: number[],
    idBolao: number
}


export const VincularParticipantesBolao = async (
    params: IVincularParticipantesBolaoProps
) => {
    try {
        const response = await Api.post(`/participantesBolao/vincularParticipantes`, params)

        return response.data
    } catch (error) {
        throw error
    }
}
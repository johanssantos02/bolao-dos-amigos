import { Api } from "../../../api"

export interface IListarTimesData{
    NomeTime: string,
    IdTime: number
}

export const ListarTimes = async(

): Promise<IListarTimesData[]> => {
    try {
        const response = await Api.get(`times/listar-times`)

        return response.data
    } catch (error) {
        throw error
    }
}
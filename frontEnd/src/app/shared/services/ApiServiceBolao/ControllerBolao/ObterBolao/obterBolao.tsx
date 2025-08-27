import { Api } from "../../../api"

export interface IObterBolaoData{
    idBolao: number,
    nomeBolao: string,
    statusBolao: string,
    dataCriacao: string
}

export const ObterBolao = async (

):Promise<IObterBolaoData[]> => {
    try {
        const response = await Api.get("/bolao/listar-historico-de-bolao")

        return response.data
    } catch (error) {
        return console.log(error)
    }
}
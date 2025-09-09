import { Api } from "../../../api"



export interface IObterJogadoresData{
    idJogador: number,
    nome: string
}
export const ObterJogadores = async(

):Promise<IObterJogadoresData[]> => {
   try {
    const response = await Api.get("/jogadores/obter-jogadores")

    return response.data
   } catch (error) {
    throw error
   } 
}
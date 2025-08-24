import { Api } from "../../../api"



export interface IObterJogadoresData{
    id: number,
    nome: string
}
export const ObterJogadores = async() => {
   try {
    const response = await Api.get<IObterJogadoresData[]>("/jogadores/obter-jogadores")

    return response
   } catch (error) {
    console.log(error)
   } 
}
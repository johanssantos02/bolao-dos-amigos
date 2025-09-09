import { Api } from "../../../api"


export interface ICadastrarJogadoresProps{
    nome: string
}


export const CadastrarJogadores = async(
    params: ICadastrarJogadoresProps
) => {
   try {
    const response = await Api.post("/jogadores/cadastrar-jogador", params)

    return response
   } catch (error) {
    throw error
   } 
}
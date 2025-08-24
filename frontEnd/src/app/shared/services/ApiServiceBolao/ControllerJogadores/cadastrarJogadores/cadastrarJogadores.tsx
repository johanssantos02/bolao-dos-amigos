import { Api } from "../../../api"


export interface ICadastrarJogadoresProps{
    nome: string
}


export const CadastrarJogadores = async(
    params: ICadastrarJogadoresProps
) => {
   try {
    const response = await Api.get("/jogadores/cadastrar-jogador", {
        params
    })

    return response
   } catch (error) {
    console.log(error)
   } 
}
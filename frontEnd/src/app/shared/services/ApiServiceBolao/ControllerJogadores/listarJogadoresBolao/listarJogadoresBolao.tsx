import { Api } from "../../../api"


export interface IListarJogadorBolaoData {
    idJogador: number,
    nome: string
}


export const ListarJogadoresBolao = async (
    idBolao: number
): Promise<IListarJogadorBolaoData[]> => {
    try {
        const response = await Api.get(`/jogadores/listar-jogadores-do-bolao?idBolao=${idBolao}`,)

        return response.data
    } catch (error) {
        console.log("Erro ao obter jogadores", error)
        throw error
    }
}
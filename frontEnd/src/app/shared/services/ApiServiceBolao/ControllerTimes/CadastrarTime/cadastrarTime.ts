

import { Api } from "../../../api"


export const CadastrarTime = async (
    nomeTime: string
) => {
    try {
        const response = await Api.post(`/times/cadastrar-novo-time?nomeTime=${nomeTime}`)

        return response.data
    } catch (error) {
        throw error
    }
}
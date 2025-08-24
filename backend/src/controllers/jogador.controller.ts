import { Request, Response } from "express";
import { query } from "../db/db";



export const JogadorController = {

    listar: async (_req: Request, res: Response) => {
        try {

            const response = await query("Select * from jogadores")
            return res.json(response)

        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: "Erro ao buscar" })
        }
    },

    criar: async (req: Request, res: Response) => {

        const { nome} = req.body;

        if (!nome) {
            return res.status(400).json({ error: "Campos obrigatórios faltando" });
        }

        try {
            const sqlInsert = `
            insert into jogadores (nome) value (${nome})
            `

            await query(sqlInsert)

            return res.status(200).json({message: "Jogador Cadastrado com sucesso!"});
        } catch (error) {
            return res.status(500).json({error: "Erro ao cadastrar jogador, verifique os dados"})
        }
    }
}
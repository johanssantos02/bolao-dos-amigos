import { Request, Response } from "express";
import { query } from "../db/db";



export const BolaoController = {

    listar: async (_req: Request, res: Response) => {
        try {

            const response = await query("Select * from bolao")
            return res.json(response)

        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: "Erro ao buscar" })
        }
    },

    

    criar: async (req: Request, res: Response) => {

        const { nomeBolao, dataCriacao } = req.body;

        if (!nomeBolao && dataCriacao) {
            return res.status(400).json({ error: "Campos obrigatórios faltando" });
        }

        try {
            const sqlInsert = `
            insert into bolao (nomeBolao, dataCriacao) values ('${nomeBolao}, ${dataCriacao}')
            `

            await query(sqlInsert)

            return res.status(200).json({ message: "Jogador Cadastrado com sucesso!" });
        } catch (error) {
            res.status(500).json({ error: "Erro ao cadastrar jogador, verifique os dados" })
        }
    }
}
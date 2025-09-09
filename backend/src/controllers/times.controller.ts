import { Request, Response } from "express";
import { query } from "../db/db";



export const TimesController = {

    listar: async (_req: Request, res: Response) => {
        try {

            const response = await query("Select * from Times")
            return res.json(response)

        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: "Erro ao buscar" })
        }
    },

    

    criar: async (req: Request, res: Response) => {

        const { nomeTime} = req.query;

        if (!nomeTime) {
            return res.status(400).json({ error: "Campos obrigatórios faltando" });
        }

        try {
            const sqlInsert = `
            insert into Times (nomeTime) values ('${nomeTime}')
            `

            await query(sqlInsert)

            return res.status(200).json({ message: "Time Cadastrado com sucesso!" });
        } catch (error) {
            res.status(500).json({ error: "Erro ao cadastrar Time, verifique os dados" })
        }
    }
}
import { Request, Response } from "express";
import { query } from "../db/db";



export const partidasController = {

    listar: async (req: Request, res: Response) => {

        const { idBolao } = req.body;

        try {

            const response = await query(
                `Select * from partidas where idBolao = ${idBolao}`
            )
            return res.json(response)

        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: "Erro ao buscar partidas" })
        }
    },

    criar: async (req: Request, res: Response) => {

        const { t1, t2, dataPartida, resultadopartida, vencedorIdTime, idBolao } = req.body;

        if (!t1 && !t2 && !dataPartida && !idBolao) {
            return res.status(400).json({ error: "Campos obrigatórios faltando" });
        }

        try {
            const sqlInsert = `
            insert into partidas (
            t1,
            t2,
            dataPartida,
            resultadopartida,
            vencedorIdTime, idBolao) values ('
            ${t1},
            ${t2},
            ${dataPartida},
            ${resultadopartida},
            ${vencedorIdTime},
            ${idBolao}')
            `

            await query(sqlInsert)

            return res.status(200).json({ message: "Partida Cadastrada com sucesso!" });
        } catch (error) {
            res.status(500).json({ error: "Erro ao cadastrar Partida, verifique os dados" })
        }
    }
}
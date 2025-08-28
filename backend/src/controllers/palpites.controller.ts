import { Request, Response } from "express";
import { query } from "../db/db";



export const PalpitesController = {

    listar: async (req: Request, res: Response) => {
        try {
            const { idBolao } = req.body;
            const { idJogador } = req.body;

            const response = await query(`Select * from palpites where idBolao = ${idBolao} and idJogador = ${idJogador}`)
            return res.json(response)

        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: "Erro ao buscar" })
        }
    },

    criar: async (req: Request, res: Response) => {

        const { dataPalpite } = req.body;
        const { idpartida } = req.body;
        const { idJogador } = req.body;
        const { timeApostadoId } = req.body;
        const { idBolao } = req.body;
        const { valorApostado } = req.body;

        if (!dataPalpite) {
            return res.status(400).json({ error: "Campos obrigatórios faltando" });
        }
        if (!idpartida) {
            return res.status(400).json({ error: "Necessário informar a partida" });
        }
        if (!idJogador) {
            return res.status(400).json({ error: "Necessário informar a jogador" });
        }
        if (!timeApostadoId) {
            return res.status(400).json({ error: "Necessário escolher o time" });
        }
        if (!idBolao) {
            return res.status(400).json({ error: "Campos obrigatórios faltando" });
        }
        if (!valorApostado) {
            return res.status(400).json({ error: "Necessário informar o valor do palpite" });
        }

        try {
            const sqlInsert = `
            insert into apostas 
            (dataPalpite,
            idpartida,
            idJogador,
            timeApostadoId,
            idBolao,
            valorApostado
            ) values (
            ${dataPalpite},
            ${idpartida},
            ${idJogador},
            ${timeApostadoId},
            ${idBolao},
            ${valorApostado}
            )
            `

            await query(sqlInsert)

            return res.status(200).json({ message: "Palpite cadastrado com sucesso!" });
        } catch (error) {
            return res.status(500).json({ error: "Erro ao cadastrar jogador, verifique os dados" })
        }
    }
}
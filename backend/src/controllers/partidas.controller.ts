import { Request, Response } from "express";
import { query } from "../db/db";



export const partidasController = {

    listar: async (req: Request, res: Response) => {

        const { idBolao } = req.query;

        try {

            const response = await query(
                `
                SELECT 
                p.idPartida,
                p.t1,
                t1.NomeTime AS nomeTime1,
                p.t2,
                t2.NomeTime AS nomeTime2,
                p.dataPartida,
                p.resultadopartida,
                p.vencedorIdTime,
                p.idBolao
                FROM partidas p
                INNER JOIN Times t1 ON p.t1 = t1.idTime
                INNER JOIN Times t2 ON p.t2 = t2.idTime
                WHERE p.idBolao = ${idBolao}
                `
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
            vencedorIdTime, idBolao) values (
            ${t1},
            ${t2},
            '${dataPartida}',
            ${resultadopartida},
            ${vencedorIdTime},
            ${idBolao})
            `

            await query(sqlInsert)

            return res.status(200).json({ message: "Partida Cadastrada com sucesso!" });
        } catch (error) {
            res.status(500).json({ error: "Erro ao cadastrar Partida, verifique os dados" })
        }
    },
    atualizarVencedor: async (req: Request, res: Response) => {
        const { idPartida } = req.body;
        const { vencedorIdTime } = req.body;

        if (!idPartida || vencedorIdTime === null || vencedorIdTime === undefined) {
            return res.status(400).json({ error: "Selecione a partida e o time vencedor" });
        }

        try {
            const sqlUpdate = `
            UPDATE partidas
            SET vencedorIdTime = ${vencedorIdTime}
            WHERE idPartida = ${idPartida}
      `;

            await query(sqlUpdate);

            return res.status(200).json({ message: "Vencedor atualizado com sucesso!" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro ao atualizar vencedor da partida" });
        }
    }
}
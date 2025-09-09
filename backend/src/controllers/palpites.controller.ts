import { Request, Response } from "express";
import { query } from "../db/db";



export const PalpitesController = {

    listar: async (req: Request, res: Response) => {
        try {
            const { idJogadorBolao } = req.query;

            const response = await query(`SELECT 
                    p.id AS idPalpite,
                    p.dataPalpite,
                    p.idParticipanteBolao,
                    pa.idPartida,
                    pa.dataPartida,
                    t1.NomeTime AS Time1,
                    t2.NomeTime AS Time2,
                    tp.NomeTime AS TimePalpite
                    FROM palpites p
                    INNER JOIN partidas pa 
                        ON p.idPartida = pa.idPartida
                    INNER JOIN Times t1 
                        ON pa.t1 = t1.IdTime
                    INNER JOIN Times t2 
                        ON pa.t2 = t2.IdTime
                    INNER JOIN Times tp 
                    ON p.timePalpite = tp.IdTime where idParticipanteBolao = ${idJogadorBolao}`)
            return res.json(response)

        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: "Erro ao buscar" })
        }
    },

    criar: async (req: Request, res: Response) => {

        const { idpartida } = req.body;
        const { idParticipanteBolao } = req.body;
        const { timePalpite } = req.body;

       
        if (!idpartida) {
            return res.status(400).json({ error: "Necessário informar a partida" });
        }
        if (!idParticipanteBolao) {
            return res.status(400).json({ error: "Necessário informar a jogador" });
        }
        if (timePalpite === null || timePalpite === undefined) {
            return res.status(400).json({ error: "Necessário escolher o time" });
        }

        try {
            const sqlInsert = `
            insert into palpites(idpartida,idParticipanteBolao,timePalpite) values(
                    ${idpartida},
                    ${idParticipanteBolao},
                    ${timePalpite}
                )
                    `

            await query(sqlInsert)

            return res.status(200).json({ message: "Palpite cadastrado com sucesso!" });
        } catch (error) {
            return res.status(500).json({ error: "Erro ao cadastrar palpite, verifique os dados" })
        }
    }
}
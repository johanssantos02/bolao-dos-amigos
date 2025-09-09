import { Request, Response } from "express";
import { query } from "../db/db";
import sql from "mssql";



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
    listarJogadoresBolao: async (req: Request, res: Response) => {

        const { idBolao } = req.query;

        if (!idBolao || isNaN(Number(idBolao))) {
            return res.status(400).json({ error: "ID do Bolão inválido." });
        }

        try {
            const response = await query(
                `SELECT DISTINCT
                j.idJogador,
                j.nome
                FROM palpites p
                INNER JOIN jogadores j ON p.idJogador = j.idJogador
                WHERE p.idBolao = @idBolao`,
                [{ name: "idBolao", type: sql.Int, value: Number(idBolao) }]
            )
            return res.json(response)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: "Erro ao buscar Jogadores deste bolao" })
        }
    },

    criar: async (req: Request, res: Response) => {

        const { nome } = req.body;

        if (!nome) {
            return res.status(400).json({ error: "Campos obrigatórios faltando" });
        }

        try {
            const sqlInsert = `
            insert into jogadores (nome) values (@nome)
            `

            await query(sqlInsert, [{ name: "nome", type: sql.VarChar, value: nome }])

            return res.status(200).json({ message: "Jogador Cadastrado com sucesso!" });
        } catch (error) {
            res.status(500).json({ error: "Erro ao cadastrar jogador, verifique os dados" })
        }
    }
}
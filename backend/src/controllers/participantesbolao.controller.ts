import { Request, Response } from "express";
import { query } from "../db/db";
import sql from "mssql";



export const ParticipanteBolaoController = {

    listar: async (req: Request, res: Response) => {
        try {

            const { idBolao } = req.query

            const response = await query(`SELECT
            pb.idParticipanteBolao,
            j.nome
            FROM
            ParticipantesBolao AS pb
            JOIN
            Jogadores AS j ON pb.idJogador = j.idJogador
            where idBolao = @idBolao`,[
            {name: "idBolao", type: sql.Int, value: idBolao}])
            
            return res.json(response)

        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: "Erro ao buscar " })
        }
    },
    // listarParticipantesBolao: async (req: Request, res: Response) => {

    //     const { idBolao } = req.query;

    //     if (!idBolao || isNaN(Number(idBolao))) {
    //         return res.status(400).json({ error: "ID do Bolão inválido." });
    //     }

    //     try {
    //         const response = await query(
    //             `select * from ParticipantesBolao where idBolao = @idBolao`,
    //             [{ name: "idBolao", type: sql.Int, value: Number(idBolao) }]
    //         )
    //         return res.json(response)
    //     } catch (error) {
    //         console.error(error)
    //         return res.status(500).json({ error: "Erro ao buscar participantes deste bolao" })
    //     }
    // },

    criar: async (req: Request, res: Response) => {
    const { idBolao, jogadores } = req.body;

    // Validar se os campos existem
    if (!idBolao || !Array.isArray(jogadores) || jogadores.length === 0) {
        return res.status(400).json({ error: "Campos obrigatórios faltando ou lista de jogadores vazia" });
    }

    try {
        // Para cada jogador, cria o insert
        for (const idJogador of jogadores) {
            await query(`
                INSERT INTO ParticipantesBolao (idJogador, idBolao) 
                VALUES (@idJogador, @idBolao)
            `, [
                { name: "idJogador", type: sql.Int, value: idJogador },
                { name: "idBolao", type: sql.Int, value: idBolao }
            ]);
        }

        return res.status(200).json({ message: "Participantes vinculados com sucesso!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao vincular participantes, verifique os dados" });
    }
}

}
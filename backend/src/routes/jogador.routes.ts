import { Router } from "express";
import { JogadorController } from "../controllers/jogador.controller";


const jogadorRoutes = Router()


jogadorRoutes.get("/obter-jogadores", JogadorController.listar)
jogadorRoutes.get("/listar-jogadores-do-bolao", JogadorController.listarJogadoresBolao)
jogadorRoutes.post("/cadastrar-jogador", JogadorController.criar)


export default jogadorRoutes;
import { Router } from "express";
import { partidasController } from "../controllers/partidas.controller";


const partidasRoutes = Router()


partidasRoutes.get("/obter-jogadores", partidasController.listar)
partidasRoutes.post("/cadastrar-jogador", partidasController.criar)


export default partidasRoutes;
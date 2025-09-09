import { Router } from "express";
import { partidasController } from "../controllers/partidas.controller";


const partidasRoutes = Router()


partidasRoutes.get("/obter-partidas", partidasController.listar)
partidasRoutes.post("/cadastrar-partidas", partidasController.criar)
partidasRoutes.put("/atualizar-vencedor", partidasController.atualizarVencedor)


export default partidasRoutes;
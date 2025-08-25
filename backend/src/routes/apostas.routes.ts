import { Router } from "express";
import { JogadorController } from "../controllers/jogador.controller";


const apostasRoutes = Router()



apostasRoutes.get("/obter-apostas", JogadorController.listar)
apostasRoutes.post("/cadastrar-jogador", JogadorController.criar)


export default apostasRoutes;
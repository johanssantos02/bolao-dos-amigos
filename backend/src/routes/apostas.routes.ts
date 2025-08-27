import { Router } from "express";
import { JogadorController } from "../controllers/jogador.controller";
import { ApostasController } from "../controllers/apostas.controller";


const apostasRoutes = Router()



apostasRoutes.get("/obter-palpites", ApostasController.listar)
apostasRoutes.post("/cadastrar-palpite", ApostasController.criar)


export default apostasRoutes;
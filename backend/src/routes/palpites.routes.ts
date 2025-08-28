import { Router } from "express";
import { JogadorController } from "../controllers/jogador.controller";
import { PalpitesController } from "../controllers/palpites.controller";


const palpitesRoutes = Router()



palpitesRoutes.get("/obter-palpites-jogador", PalpitesController.listar)
palpitesRoutes.post("/cadastrar-palpite", PalpitesController.criar)


export default palpitesRoutes;
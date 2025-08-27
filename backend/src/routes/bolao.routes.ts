import { Router } from "express";
import { BolaoController } from "../controllers/bolao.controller";


const bolaoRouter = Router()


bolaoRouter.get("/listar-historico-de-bolao", BolaoController.listar)
bolaoRouter.post("/criar-novo-bolao", BolaoController.criar)

export default bolaoRouter
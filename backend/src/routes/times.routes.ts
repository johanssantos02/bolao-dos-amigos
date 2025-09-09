import { Router } from "express";
import { TimesController } from "../controllers/times.controller";


const timesRouter = Router()


timesRouter.get("/listar-times", TimesController.listar)
timesRouter.post("/cadastrar-novo-time", TimesController.criar)

export default timesRouter
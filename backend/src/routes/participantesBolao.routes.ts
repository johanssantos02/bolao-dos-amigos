import { Router } from "express";
import { TimesController } from "../controllers/times.controller";
import { ParticipanteBolaoController } from "../controllers/participantesbolao.controller";


const participantesBolaoRouter = Router()


participantesBolaoRouter.get("/listar-participantes", ParticipanteBolaoController.listar)
participantesBolaoRouter.post("/vincularParticipantes", ParticipanteBolaoController.criar)

export default participantesBolaoRouter
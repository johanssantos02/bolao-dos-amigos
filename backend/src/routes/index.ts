import { Router } from "express";
import jogadorRoutes from "./jogador.routes";
import apostasRoutes from "./palpites.routes";
import partidasRoutes from "./partidas.routes";
import bolaoRouter from "./bolao.routes";
import palpitesRoutes from "./palpites.routes";


const routes = Router();

//JOGADORES

routes.use("/jogadores", jogadorRoutes);

routes.use("/heath", (_req, res) => {
    res.json({
        ok: true, env: process.env.NODE_ENV ?? "`development"
    });
});


//APOSTAS

routes.use("/palpites", palpitesRoutes);

routes.use("/heath", (_req, res) => {
    res.json({
        ok: true, env: process.env.NODE_ENV ?? "`development"
    });
});

//PARTIDAS

routes.use("/partidas", partidasRoutes);

routes.use("/heath", (_req, res) => {
    res.json({
        ok: true, env: process.env.NODE_ENV ?? "`development"
    });
});

//BOLAO

routes.use("/bolao", bolaoRouter);

routes.use("/heath", (_req, res) => {
    res.json({
        ok: true, env: process.env.NODE_ENV ?? "`development"
    });
});

export default routes
import "dotenv/config";
import express from "express";
import cors from "cors";
import * as db from "./db/db";
import routes from "./routes";

const app = express();
app.use(cors({ origin: [
  process.env.CORS_ORIGIN ?? "http://localhost:5173",
  "http://192.168.3.189:5173"

]}));
app.use(express.json());

app.use("/api", routes)


export default app

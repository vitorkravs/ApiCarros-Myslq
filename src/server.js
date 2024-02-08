import { config } from "dotenv";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import router from "./routes.js";

config();

const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

server.listen(process.env.PORT, () => {
  console.log("Servidor rodando em http://localhost:" + process.env.PORT);
});

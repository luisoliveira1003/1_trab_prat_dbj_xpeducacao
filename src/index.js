import cors from "cors";
import express from "express";
import { routesBrands } from "./routes/marcas.js";

export const app = express();
export const router = express.Router();

app.use(express.json());
app.use(cors());

const createRoutesBrands = routesBrands();

app.use("/marcas", createRoutesBrands);

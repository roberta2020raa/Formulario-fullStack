import express from "express";
import { cadastroUsuario } from "../controllers/usuarioController.js";

const router = express.Router();

 router.post("/",cadastroUsuario );
 
export default router;

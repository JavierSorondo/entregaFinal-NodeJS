import { Router } from 'express';
import { login } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/login', login);

console.log("authRouter cargado correctamente");

export default authRouter;
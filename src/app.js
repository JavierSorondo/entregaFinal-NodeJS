import express from "express";
import cors from "cors";

import db from "./data/data.js";

import productsRouter from "./routes/products.router.js";
import authRouter from "./routes/auth.router.js";
import notFoundMiddleware from "./middlewares/not.found.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', productsRouter); // Agrega el prefijo /api a todas las rutas definidas en productsRouter
app.use('/auth', authRouter); // Agrega el prefijo /auth a todas las rutas definidas en authRouter

app.get("/", (req, res) => {
  res.json({ message: "Servidor en ejecución" });
});

app.use(notFoundMiddleware);

export default app;


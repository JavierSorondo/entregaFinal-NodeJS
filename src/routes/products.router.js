import { Router } from "express";
import * as productsController from "../controllers/products.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

// /api/products
router.get('/', authMiddleware, productsController.getAllProducts);
router.post('/', authMiddleware, productsController.createProduct);

// /api/products/:id
router.get('/:id', authMiddleware, productsController.getProductById);
router.put('/:id', authMiddleware, productsController.updateProduct);
router.delete('/:id', authMiddleware, productsController.deleteProduct);


export default router;
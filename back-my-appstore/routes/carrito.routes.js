import { Router } from "express";
import { addCarrito, getCarrito, vaciarCarrito } from "../controllers/carrito.controllers.js";
const router = Router();

router.get('/carrito', getCarrito);
router.post('/carrito',addCarrito);
router.delete('/carrito/:id', vaciarCarrito);

export default router;


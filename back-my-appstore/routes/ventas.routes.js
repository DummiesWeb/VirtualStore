import { Router } from "express";
import { createVenta, deleteVenta, getVentas } from "../controllers/ventas.controllers.js";
const router = Router();

router.get('/ventas', getVentas);
router.post('/ventas', createVenta);
router.delete('/ventas/:id', deleteVenta);

export default router;
import { Router } from "express";
import { createProducto, removeProducto, getproducto, getProductos, updateProducto } from "../controllers/productos.controllers.js";

const router = Router();

router.get('/productos', getProductos);
router.post('/productos', createProducto);
router.put('/productos/:id', updateProducto);
router.delete('/productos/:id', removeProducto);
router.get('/productos/:id', getproducto);


export default router;
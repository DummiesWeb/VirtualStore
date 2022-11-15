import express  from "express";
import productosRoutes from "./routes/productos.routes.js";
import ventasRoutes from "./routes/ventas.routes.js"
import carritoRoutes from './routes/carrito.routes.js'

const app= express();
app.use(express.json());
app.use(productosRoutes, ventasRoutes, carritoRoutes);



export default app;
import express  from "express";
import cors from "cors";
import productosRoutes from "./routes/productos.routes.js";
import ventasRoutes from "./routes/ventas.routes.js"
import carritoRoutes from './routes/carrito.routes.js'
import usersRoutes from "./routes/user.routes.js";
import registerRoutes from "./routes/register.routes.js";
import loginRoutes from "./routes/login.routes.js";
import fileUpload from "express-fileupload";


const app= express();
app.use(cors());
app.use(express.json());
app.use(
    fileUpload({
      tempFileDir: "./upload",
      useTempFiles: true,
    })
  );
app.use(productosRoutes, ventasRoutes, carritoRoutes, usersRoutes,registerRoutes,loginRoutes);



export default app;
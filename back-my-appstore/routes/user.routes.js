import { Router } from "express";
import { getUserById} from "../controllers/user.controllers.js";


const router = Router();
router.get("/users/:id", getUserById);


export default router;
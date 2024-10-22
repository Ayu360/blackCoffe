import { Router } from "express";
const router = Router();
import { getData } from "../controllers/dataController.js";

router.get("/data", getData);

export default router;

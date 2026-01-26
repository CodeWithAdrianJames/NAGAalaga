import express from "express";
import { protectRoute } from "../middlewares/authMiddleware";
import { triageSymptoms } from "../controllers/gemini";
const router = express.Router();

router.post("/gemini",protectRoute,triageSymptoms);

export default router;
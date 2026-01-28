import express from "express";
import { triageSymptoms } from "../controllers/gemini";
const router = express.Router();

router.post("/gemini",triageSymptoms);

export default router;
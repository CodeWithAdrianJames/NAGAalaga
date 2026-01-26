import express from "express";
import authRoutes from "./authRoutes"
import geminiRoutes from './geminiRoute'
const router = express.Router();


router.use("/auth", authRoutes)
router.use("/triage",geminiRoutes);
export default router;
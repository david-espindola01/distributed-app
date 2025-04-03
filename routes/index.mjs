import express from "express";
import { handleBMICalculation } from "../controllers/control.mjs";

const router = express.Router();

router.post("/bmi", handleBMICalculation);

export default router;

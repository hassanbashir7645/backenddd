import { Router } from "express";
import {
  submitTestResults,
  getTestResults,
} from "../controllers/psychrometictestscontroller";

const router = Router();

router.post("/submit", submitTestResults);
router.get("/results", getTestResults);

export default router;
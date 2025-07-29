import express from "express";
import {
  getAttendanceRecords,
  markAttendance,
} from "../controllers/attendencecontroller";

const router = express.Router();

router.get("/", getAttendanceRecords);
router.post("/", markAttendance);

export default router;
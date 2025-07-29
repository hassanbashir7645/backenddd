import { Request, Response } from "express";

// Define the structure of an attendance record
interface AttendanceRecord {
  id: string;
  employeeId: string;
  date: string;
  status: "Present" | "Absent" | "Leave";
}

// In-memory array for attendance records
const attendanceRecords: AttendanceRecord[] = [];

// GET /attendance — fetch all attendance records
export const getAttendanceRecords = (req: Request, res: Response) => {
  res.status(200).json(attendanceRecords);
};

// POST /attendance — mark a new attendance record
export const markAttendance = (req: Request, res: Response) => {
  const { employeeId, date, status } = req.body;

  if (!employeeId || !date || !status) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const newRecord: AttendanceRecord = {
    id: Date.now().toString(),
    employeeId,
    date,
    status,
  };

  attendanceRecords.push(newRecord);
  res.status(201).json(newRecord);
};
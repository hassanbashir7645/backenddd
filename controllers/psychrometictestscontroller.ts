import { Request, Response } from "express";

// Simulated in-memory database
let testResults: any[] = [];

// POST /psychrometictests/submit
export const submitTestResults = (req: Request, res: Response) => {
  const { employeeId, testType, answers, score } = req.body;

  if (!employeeId || !testType || !answers || score === undefined) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const newResult = {
    id: Date.now().toString(),
    employeeId,
    testType,
    answers,
    score,
    submittedAt: new Date().toISOString(),
  };

  testResults.push(newResult);
  return res.status(201).json(newResult);
};

// GET /psychrometictests/results
export const getTestResults = (_req: Request, res: Response) => {
  res.status(200).json(testResults);
};
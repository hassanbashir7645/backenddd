import { Request, Response } from "express";

// Mock login function
export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;
  
  if (username === "admin" && password === "admin123") {
    return res.json({ token: "mock-jwt-token", role: "admin" });
  }

  return res.status(401).json({ message: "Invalid credentials" });
};
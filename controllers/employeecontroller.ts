import { Request, Response } from "express";

// Fake employee data store (in-memory)
let employees: any[] = [];

export const getAllEmployees = (req: Request, res: Response) => {
  res.json(employees);
};

export const getEmployeeById = (req: Request, res: Response) => {
  const id = req.params.id;
  const employee = employees.find(emp => emp.id === id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
};

export const createEmployee = (req: Request, res: Response) => {
  const newEmployee = req.body;
  newEmployee.id = Date.now().toString(); // Simple ID
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
};

export const updateEmployee = (req: Request, res: Response) => {
  const id = req.params.id;
  const index = employees.findIndex(emp => emp.id === id);
  if (index !== -1) {
    employees[index] = { ...employees[index], ...req.body };
    res.json(employees[index]);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
};

export const deleteEmployee = (req: Request, res: Response) => {
  const id = req.params.id;
  const index = employees.findIndex(emp => emp.id === id);
  if (index !== -1) {
    const deleted = employees.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
};
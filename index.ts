import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes";
import employeeRoutes from "./routes/employeeRoutes";
import psychometricRoutes from "./routes/psycchrometictestsRoutes";
import attendanceRoutes from "./routes/attendenceRoutes";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/psychometric", psychometricRoutes);
app.use("/api/attendance", attendanceRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// ✅ FIXED THIS LINE:
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
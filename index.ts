import express from "express";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import helmet from "helmet"; // Optional but recommended

import authRoutes from "./routes/authRoutes";
import employeeRoutes from "./routes/employeeRoutes";
import psychometricRoutes from "./routes/psycchrometictestsRoutes";
import attendanceRoutes from "./routes/attendenceRoutes";

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middlewares
app.use(cors({
  origin: "https://melodious-muffin-144488.netlify.app",
  credentials: true,
}));
app.use(express.json());
app.use(compression());
app.use(morgan("dev"));
app.use(helmet());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/psychometric", psychometricRoutes);
app.use("/api/attendance", attendanceRoutes);

// ✅ Root
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
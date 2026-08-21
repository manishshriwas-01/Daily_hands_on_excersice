import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

export default app;

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Express MongoDB Atlas API is running"
  });
});

app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);

app.use(errorHandler);

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
  }
}

if (process.env.NODE_ENV !== "test") {
  startServer();
}
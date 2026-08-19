import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// Create Task
router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json({
      message: "Task created successfully",
      task
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

// Get all Tasks with populated User
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate("user", "name email")
      .lean();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

// Get Task by ID
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
      .populate("user", "name email")
      .lean();

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

// Update Task
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

// Delete Task
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.status(200).json({
      message: "Task deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

export default router;
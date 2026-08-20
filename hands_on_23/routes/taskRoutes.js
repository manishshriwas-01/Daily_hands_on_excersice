import express from "express";
import Task from "../models/Task.js";
import asyncHandler from "../middleware/asyncHandler.js";

const router = express.Router();

// CREATE TASK
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const task = await Task.create(req.body);

    res.status(201).json({
      message: "Task created successfully",
      task
    });
  })
);

// GET ALL TASKS
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  })
);

// GET SINGLE TASK
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.status(200).json(task);
  })
);

// UPDATE TASK
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
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

    res.status(200).json({
      message: "Task updated successfully",
      task
    });
  })
);

// DELETE TASK
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.status(200).json({
      message: "Task deleted successfully"
    });
  })
);

export default router;
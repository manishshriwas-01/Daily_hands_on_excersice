import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      minlength: [3, "Task title must be at least 3 characters"]
    },

    status: {
      type: String,
      enum: {
        values: ["todo", "done"],
        message: "Status must be either todo or done"
      },
      default: "todo"
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"]
    }
  },
  {
    timestamps: true
  }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
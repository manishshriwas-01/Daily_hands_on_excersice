import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
    title: {
      type: String,
      required: [true, "Task title is required"],
      minlength: [3, "Task title must be at least 3 characters"]
    },

    status: {
      type: String,
      enum: ["todo", "done"],
      default: "todo"
    }
  },
  {
    timestamps: true
  }
);
const Task= mongoose.model('Task',taskSchema);
export default Task;
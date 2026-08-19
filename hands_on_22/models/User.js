import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name must be at least 3 characters"]
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true
    }
  },
  {
    timestamps: true
  }
);

const User= mongoose.model('User',userSchema);
export default User;
import mongoose from "mongoose";

// Define the Email schema
const EmailSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email address is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Email address is invalid"], 
    },
  },
  {
    timestamps: true, 
  }
);

// Check if the model already exists before defining it to avoid compilation issues
const Email = mongoose.models.Email || mongoose.model("Email", EmailSchema);

export default Email;

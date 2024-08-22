import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Ensure password is required when creating a user
  resetToken: { type: String, required: false },
  resetTokenExpires: { type: String, required: false },
});

UserSchema.pre("save", async function (next) {
  const user = this; // doc

  if (user.isModified("password")) {
    // Hash the password only if it has been modified or is new
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

// Optionally, you can clear the password field after saving, but this is not recommended as it might be needed for certain operations.
UserSchema.post("save", function (doc, next) {
  doc.password = ""; // Clear the password field after saving
  next();
});

export const UserModel =
  mongoose.models.User || mongoose.model("User", UserSchema);

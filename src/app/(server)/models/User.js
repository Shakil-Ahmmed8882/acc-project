import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: false },
  resetToken: { type: String, required: false },
  resetTokenExpires: { type: String, required: false },
});

UserSchema.pre("save", async function (next) {
  const user = this; // doc
  // hashing password and save into DB
  user.password = await bcrypt.hash(user.password, 10);
  next();
});

// set '' after saving password
UserSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const UserModel =
  mongoose.models.User || mongoose.model("User", UserSchema);

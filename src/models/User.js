import mongoose, { model } from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String, required: true },
  password :{type:String,required:true}
});

export const UserModel= model("user",UserSchema)
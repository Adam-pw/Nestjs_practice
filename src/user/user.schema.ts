import mongoose, { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

export interface InterfaceUser extends Document {
  name: string;
  email: string;
  password: string;
}

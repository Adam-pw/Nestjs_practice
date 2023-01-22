import mongoose, { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
});

export interface InterfaceUser extends Document {
  id: string;
  name: string;
  email: string;
}

import mongoose, { Document } from 'mongoose';

export const HabitSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  target: Number,
});

export interface InterfaceHabit extends Document {
  id: string;
  name: string;
  description: string;
  target: number;
}

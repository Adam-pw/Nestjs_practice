import mongoose, { Document } from 'mongoose';

export const HabitSchema = new mongoose.Schema({
  name: String,
  description: String,
  target: Number,
});

export interface InterfaceHabit extends Document {
  name: string;
  description: string;
  target: number;
}

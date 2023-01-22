import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Habit } from './habits.model';
import { InterfaceHabit } from './habits.schema';

@Injectable()
export class HabitsService {
  constructor(
    @InjectModel('Habits') private readonly habitModel: Model<InterfaceHabit>,
  ) {}

  insertHabit(name: string, description: string, target: number) {
    const habitId = Math.random().toString();
    const newHabit = new Habit(habitId, name, description, target);
    new this.habitModel(newHabit).save();
    return habitId;
  }

  findHabits() {
    return this.habitModel.find().exec();
  }

  findHabitsById(id: string): Promise<any> {
    return this.habitModel.findOne({ id }).exec();
  }

  deleteHabitById(id: string): Promise<any> {
    return this.habitModel.deleteOne({ id }).exec();
  }
}

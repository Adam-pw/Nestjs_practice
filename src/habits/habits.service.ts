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
    const newHabit = new Habit(name, description, target);
    return new this.habitModel(newHabit).save();
  }

  findHabits() {
    return this.habitModel.find().exec();
  }

  findHabitsById(_id: string): Promise<any> {
    return this.habitModel.findOne({ _id }).exec();
  }

  deleteHabitById(_id: string): Promise<any> {
    return this.habitModel.deleteOne({ _id }).exec();
  }

  async updateWholeHabit(_id: string, name: string): Promise<any> {
    return await this.habitModel.updateOne({ _id, name });
  }
}

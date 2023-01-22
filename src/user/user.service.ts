import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { InterfaceUser } from './user.schema';

@Injectable()
export class UserServices {
  find() {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel('Users') private readonly userModel: Model<InterfaceUser>,
  ) {}

  async insertUser(name: string, email: string): Promise<any> {
    const userId = Math.random().toString();
    const newUser = new User(userId, name, email);
    new this.userModel(newUser).save();
    return userId;
  }

  async findUser() {
    return await this.userModel.find().exec();
  }

  async findUserById(id: string): Promise<any> {
    return await this.userModel.findOne({ id }).exec();
  }

  async deleteUserById(_id: string): Promise<any> {
    return await this.userModel.deleteOne({ _id }).exec();
  }

  async updateWholeUser(id: string, name: string): Promise<any> {
    return await this.userModel.updateOne({ id, name });
  }
}

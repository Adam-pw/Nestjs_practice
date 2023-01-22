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

  async insertUser(
    name: string,
    email: string,
    password: string,
  ): Promise<any> {
    const newUser = new User(name, email, password);
    return new this.userModel(newUser).save();
  }

  async findUser() {
    return await this.userModel.find().exec();
  }

  async findUserById(_id: string): Promise<any> {
    return await this.userModel.findOne({ _id }).exec();
  }

  async deleteUserById(_id: string): Promise<any> {
    return await this.userModel.deleteOne({ _id }).exec();
  }

  async updateWholeUser(_id: string, name: string): Promise<any> {
    return await this.userModel.updateOne({ _id, name });
  }
}

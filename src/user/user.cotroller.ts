import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserServices } from './user.service';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserServices) {}

  @Post()
  async addUser(
    @Body('name') userName: string,
    @Body('email') userEmail: string,
    @Body('password') userPassword: string,
  ) {
    const saltOrRounds = 5;
    const hashedPassword = await bcrypt.hash(userPassword, saltOrRounds);
    const generatedUser = this.userService.insertUser(
      userName,
      userEmail,
      hashedPassword,
    );
    return generatedUser;
  }

  @Get()
  getAllUsers() {
    const users = this.userService.findUser();
    return users;
  }

  @Get(':_id')
  getUserById(@Param('_id') userId: string) {
    const user = this.userService.findUserById(userId);
    return user;
  }

  @Delete(':_id')
  deleteById(@Param('_id') userId: string) {
    return this.userService.deleteUserById(userId);
  }

  @Put(':_id')
  updateById(@Param('_id') userId: string, @Body('name') userName: string) {
    return this.userService.updateWholeUser(userId, userName);
  }
}

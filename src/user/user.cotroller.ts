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

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserServices) {}

  @Post()
  addUser(@Body('name') userName: string, @Body('email') userEmail: string) {
    const generateId = this.userService.insertUser(userName, userEmail);
    return generateId;
  }

  @Get()
  getAllUsers() {
    const users = this.userService.findUser();
    return users;
  }

  @Get(':id')
  getUserById(@Param('id') userId: string) {
    const user = this.userService.findUserById(userId);
    return user;
  }

  @Delete(':_id')
  deleteById(@Param('_id') userId: string) {
    return this.userService.deleteUserById(userId);
  }

  @Put(':id')
  updateById(@Param('id') userId: string, @Body('name') userName: string) {
    return this.userService.updateWholeUser(userId, userName);
  }
}

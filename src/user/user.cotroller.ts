import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
}

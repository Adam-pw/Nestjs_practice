import { Body, Controller, Post } from '@nestjs/common';
import { UserServices } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserServices) {}

  @Post()
  addUser(@Body('name') userName: string, @Body('email') userEmail: string) {
    const generateId = this.userService.insertUser(userName, userEmail);
    return generateId;
  }
}

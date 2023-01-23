import { Injectable } from '@nestjs/common';
import { UserServices } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserServices,
    private jwtService: JwtService,
  ) {}

  async validateUser(_id: string, password: string): Promise<any> {
    const user = await this.userService.findUserById(_id);
    const saltOrRounds = 5;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    console.log(hashedPassword);

    if (user && user.password === hashedPassword) {
      return user;
    }

    return null;
  }

  async login(user: any) {
    const payload = { userid: user._id, sub: user.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

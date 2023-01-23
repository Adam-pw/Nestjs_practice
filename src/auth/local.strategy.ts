import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(_id: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(_id, password);

    if (!user) {
      console.log('hello');

      throw new UnauthorizedException();
    }
    console.log('hello');

    return user;
  }
}

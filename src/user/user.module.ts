import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.cotroller';
import { UserSchema } from './user.schema';
import { UserServices } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Users',
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserServices],
})
export class UserModule {}

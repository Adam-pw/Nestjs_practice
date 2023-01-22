import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HabitController } from './habits.controller';
import { HabitSchema } from './habits.schema';
import { HabitsService } from './habits.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Habits',
        schema: HabitSchema,
      },
    ]),
  ],
  controllers: [HabitController],
  providers: [HabitsService],
})
export class HabitsModule {}

import { Body, Controller, Post } from '@nestjs/common';
import { HabitsService } from './habits.service';

@Controller('habits')
export class HabitController {
  constructor(private readonly habitsService: HabitsService) {}

  @Post()
  addHabit(
    @Body('name') habitName: string,
    @Body('description') habitDescription: string,
    @Body('target') habitTarget: number,
  ) {
    const generatedId = this.habitsService.insertHabit(
      habitName,
      habitDescription,
      habitTarget,
    );
    return { id: generatedId };
  }
}

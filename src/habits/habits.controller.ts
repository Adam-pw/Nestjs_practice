import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
    const generatedhabit = this.habitsService.insertHabit(
      habitName,
      habitDescription,
      habitTarget,
    );
    return generatedhabit;
  }

  @Get()
  getAllHabits() {
    const habits = this.habitsService.findHabits();
    return habits;
  }

  @Get(':_id')
  getHabitsById(@Param('_id') habitId: string) {
    const habit = this.habitsService.findHabitsById(habitId);
    return habit;
  }

  @Delete(':_id')
  deleteById(@Param('_id') habitId: string) {
    const habit = this.habitsService.deleteHabitById(habitId);
    return habit;
  }

  @Put(':_id')
  updateById(@Param('_id') habitId: string, @Body('name') habitName: string) {
    return this.habitsService.updateWholeHabit(habitId, habitName);
  }
}

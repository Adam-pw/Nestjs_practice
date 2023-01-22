import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Get()
  getAllHabits() {
    const habits = this.habitsService.findHabits();
    return habits;
  }

  @Get(':id')
  getHabitsById(@Param('id') habitId: string) {
    const habit = this.habitsService.findHabitsById(habitId);
    return habit;
  }

  @Delete(':id')
  deleteById(@Param('id') habitId: string) {
    const habit = this.habitsService.deleteHabitById(habitId);
    return habit;
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HabitsService } from './habits.service';

@ApiTags('Habits')
@Controller('habits')
export class HabitController {
  constructor(private readonly habitsService: HabitsService) {}

  @UseGuards(JwtAuthGuard)
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

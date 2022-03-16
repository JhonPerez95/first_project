import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateTaskDTO } from './dto/createTask.DTO';
import { Tasks } from './interface/task';
import {TasksService} from './tasks.service'
@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService){}

  @Get()
  getTasks(): Tasks[] {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  getTaskByid(@Param('id') id): Tasks {
    return this.tasksService.getTask(parseInt(id))
  }

  @Post()
  createTask(@Body() task: CreateTaskDTO): Tasks[] {
    return this.tasksService.saveTask(task);
  }

  @Put(':id')
  updateTask(@Param('id') id): string {
        return `Una tarea ${id}`;
  }
  
  @Delete(':id')
  deleteTask(@Param('id') id): string {
        return `Una tarea ${id}`;
  }
}

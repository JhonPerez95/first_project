import { Injectable } from '@nestjs/common';
import { Tasks } from './interface/task';

@Injectable()
export class TasksService {
  tasks: Tasks[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Esta es la tarea 1',
      done: true,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Esta es la tarea 2',
      done: true,
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Esta es la tarea 3',
      done: true,
    },
  ];
  getTasks(): Tasks[] {
    return this.tasks;
  }

  getTask(id: number): Tasks {
    return this.tasks.find((item) => item.id === id);
  }

  saveTask(task: Tasks): Tasks[] {
    this.tasks.push(task);
    return this.tasks;

  }
}

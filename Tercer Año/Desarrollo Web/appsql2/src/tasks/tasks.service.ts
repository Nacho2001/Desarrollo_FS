import { Injectable, Inject, Body, Get, Patch, Delete, Post, Param } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @Inject()
    private tasksRepository: Repository<Task>,
  ){}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksRepository.create(createTaskDto);
  }

  @Get()
  async findAll() {
    return this.tasksRepository.find()
  }

  @Get(':id')
  findOne(id: number):Promise<Task> {
    return this.tasksRepository.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksRepository.update(+id, updateTaskDto)
  }

  @Delete()
  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}

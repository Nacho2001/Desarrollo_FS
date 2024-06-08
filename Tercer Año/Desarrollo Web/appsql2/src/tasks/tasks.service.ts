import { Injectable, Inject, Body, Get, Patch, Delete, Post, Param, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @Inject('TASKS_REPOSITORY')
    private tasksRepository: Repository<Task>,
  ){}

  async create(@Body() createTaskDto: CreateTaskDto) {
    // Crea el dto para enviarlo a la base
    const task = this.tasksRepository.create(createTaskDto);
    // envia los datos a la base
    await this.tasksRepository.save(task);
    // Retorna los datos enviados
    return task;
  }

  findAll() {
    return this.tasksRepository.find()
  }

  async findOne(id: number):Promise<Task> {
    const task = await this.tasksRepository.findOne({where: {id}});
    if(task){
      return task
    }
    throw new NotFoundException('No se encontró el elemento')
  }

  async update(id: number, body: UpdateTaskDto) {
    // Crea el objeto tarea con el id y el body
    const newTask = {
      id,
      ...body
    }
    // Busca una coincidencia del objeto en la base
    const task = await this.tasksRepository.preload(newTask);
    // Si la encuentra, actualizará el objeto
    if(task){
      return this.tasksRepository.save(task);
    }
    // Si no lo encontró, enviará un error 404
    throw new NotFoundException('No se encontró el elemento')
  }

  async remove(id: number) {
    // Obtiene el elemento a eliminar
    const task = await this.tasksRepository.findOne({where: {id}})
    // Si lo encuentra, lo elimina 
    if(task){
      return this.tasksRepository.delete(task);
    }
    // Si no lo tiene, envia un error 404 con el mensaje "no encontrado"
    throw new NotFoundException('No se encontró el elemento a borrar')
  }
}

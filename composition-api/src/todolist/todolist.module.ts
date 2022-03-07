import { Module } from '@nestjs/common';
import { TypeOrmModule, InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { TodolistController } from './todolist.controller';
import { TodolistService } from './todolist.service';
import { Repository } from 'typeorm';
import { Todolist } from '../entity/todolist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todolist])],
  controllers: [TodolistController],
  providers: [ConfigService, TodolistService],
})
export class TodolistModule {
  constructor(
    @InjectRepository(Todolist)
    private todolist: Repository<Todolist>,
  ) {}
}

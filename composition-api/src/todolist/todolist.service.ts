import { Injectable } from '@nestjs/common';
import { getConnection, Repository, getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todolist } from '../entity/todolist.entity';

@Injectable()
export class TodolistService {
  constructor(
    @InjectRepository(Todolist)
    private todolist: Repository<Todolist>,
  ) {}

  async getList(): Promise<any> {
    const res = await this.todolist.find({
      order: {
        utime: 'DESC',
      },
    });
    return res || [];
  }

  async addItem({ title }): Promise<any> {
    const result = await this.getList();
    const isrepet = result.findIndex((item) => item.title === title);
    if (isrepet !== -1) {
      return {
        code: 1,
        message: '存在重复的值',
      };
    }
    return {
      code: 0,
      data: await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Todolist)
        .values({
          title,
          status: 1,
          ctime: parseInt(String(new Date().getTime() / 1000), 10),
          utime: parseInt(String(new Date().getTime() / 1000), 10),
        })
        .execute(),
    };
  }

  async updateItem({ id, status }): Promise<any> {
    try {
      const repository = getRepository(Todolist);
      await repository.update(id, {
        status,
        utime: parseInt(String(new Date().getTime() / 1000), 10),
      });
    } catch (err) {
      console.log(err, '123');
      return 0;
    }
  }
  async delItem(id: any): Promise<any> {
    try {
      const repository = getRepository(Todolist);
      await repository.delete(id);
    } catch (err) {
      return 0;
    }
  }
}

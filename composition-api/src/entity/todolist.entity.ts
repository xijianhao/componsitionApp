import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Todolist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  // 1: 计划中  2: 已完成   3: 已删除
  @Column({ type: 'int', default: 1 })
  status: number;

  @Column()
  ctime: number;

  @Column()
  utime: number;
}

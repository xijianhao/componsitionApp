import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Aidaka {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  openid: string;

  @Column()
  weight: number;

  // 1: 公斤  2：斤
  @Column({ type: 'int', default: 1 })
  unit: number;

  @Column()
  time: number;
}

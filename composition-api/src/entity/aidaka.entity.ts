import { Entity, Column, PrimaryColumn, Timestamp } from 'typeorm';

@Entity()
export class Aidaka {
  @PrimaryColumn()
  id: string;

  // 昵称
  @Column()
  name: string;

  // 个性签名
  @Column({ default: '' })
  memo: string;

  // 身高
  @Column()
  stature: number;

  // 身高
  @Column()
  sex: '男' | '女';

  // 初始体重
  @Column()
  cweight: number;

  // 目标体重
  @Column()
  eweight: number;

  // 初始体重单位 0: 公斤  1：斤
  @Column({ type: 'int', default: 0 })
  cunit: number;

  // 目标体重单位 0: 公斤  1：斤
  @Column({ type: 'int', default: 0 })
  eunit: number;

  // 创建时间
  @Column()
  ctime: number;

  // 目标时间
  @Column()
  etime: number;
}

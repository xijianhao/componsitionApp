import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ComponsitionList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;

  @Column()
  ctime: number;

  @Column({ type: 'int', default: 0 })
  utime: number;

  @Column({ type: 'longtext' })
  content: string;

  @Column({ length: 20 })
  title: string;

  @Column({ type: 'int', default: 0 })
  score: number;

  // 0已审核 1待审核  2审核未通过
  @Column({ type: 'int', default: 1 })
  status: number;

  @Column({ type: 'boolean', default: false })
  isHot: boolean;
}

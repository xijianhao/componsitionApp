import { Module } from '@nestjs/common';
import { TypeOrmModule, InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { CommonController } from './common.controller';
import { CommonService } from './common.service';
import { Repository } from 'typeorm';
import { ComponsitionList } from '../entity/componsitionList.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComponsitionList])],
  controllers: [CommonController],
  providers: [ConfigService, CommonService],
})
export class CommonModule {
  constructor(
    @InjectRepository(ComponsitionList)
    private commonList: Repository<ComponsitionList>
  ) {}
} 
 
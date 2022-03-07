import { Module } from '@nestjs/common';
import { TypeOrmModule, InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ComponsitionController } from './componsition.controller';
import { ComponsitionService } from './componsition.service';
import { Repository } from 'typeorm';
import { ComponsitionList } from '../entity/componsitionList.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComponsitionList])],
  controllers: [ComponsitionController],
  providers: [ConfigService, ComponsitionService],
})
export class ComponsitionModule {
  constructor(
    @InjectRepository(ComponsitionList)
    private componsitionList: Repository<ComponsitionList>
  ) {}
} 
 
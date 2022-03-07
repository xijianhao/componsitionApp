import { Module } from '@nestjs/common';
import { TypeOrmModule, InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/common';
import { AidakaController } from './aidaka.controller';
import { AidakaService } from './aidaka.service';
import { Repository } from 'typeorm';
import { Aidaka } from '../entity/aidaka.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Aidaka]), HttpModule],
  controllers: [AidakaController],
  providers: [ConfigService, AidakaService],
})
export class AidakaModule {
  constructor(
    @InjectRepository(Aidaka)
    private aidaka: Repository<Aidaka>,
  ) {}
}

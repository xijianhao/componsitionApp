import { Injectable } from '@nestjs/common';
import { getConnection } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComponsitionList } from '../entity/componsitionList.entity';

@Injectable()
export class CommonService {
  constructor(
    @InjectRepository(ComponsitionList)
    private componsitionList: Repository<ComponsitionList>,
  ) {}
}

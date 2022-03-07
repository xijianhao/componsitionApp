import { Injectable, HttpService } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { getConnection, Repository, getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Aidaka } from '../entity/aidaka.entity';
import { resolve } from 'path';
@Injectable()
export class AidakaService {
  constructor(
    @InjectRepository(Aidaka)
    private aidaka: Repository<Aidaka>,
    private readonly httpService: HttpService,
  ) {}

  login(code): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpService
        .get(
          `https://api.weixin.qq.com/sns/jscode2session?appid=wx4140fd476c84e76d&secret=44ce8697b66d30a9b6ec0a72836535e1&js_code=${code}&grant_type=authorization_code`,
        )
        .subscribe((result) => {
          resolve(result.data);
        });
    });
    // console.log(result, 'result');
    // return result || [];
  }
}

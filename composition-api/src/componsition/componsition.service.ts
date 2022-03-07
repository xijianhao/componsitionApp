import { Injectable } from '@nestjs/common';
import { getConnection } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComponsitionList } from '../entity/componsitionList.entity';

@Injectable()
export class ComponsitionService {
  constructor(
    @InjectRepository(ComponsitionList)
    private componsitionList: Repository<ComponsitionList>,
  ) {}

  getList(status: 0 | 1 ): Promise<ComponsitionList[]> {
    return this.componsitionList.find({status: status});
  }

  async getDetail(id:number):Promise<any> {
    const res = await this.componsitionList.find({id: id});
    return res[0] || {}
  }

  async onCreate({author, title, content}): Promise<any> {
    const ctime = Math.floor(Date.now() / 1000);
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(ComponsitionList)
      .values({
        title,
        author,
        ctime,
        content,
      })
      .execute();
  }

  async onAudit({id, status}): Promise<any>{
    try{
      await getConnection()
      .createQueryBuilder()
      .update(ComponsitionList)
      .set({ status:status})
      .whereInIds(id)
      .execute()
      const list:any[] = await this.componsitionList.find({status: 1})
      const random = parseInt((Math.random() * list.length as any) ) || 0
      return list[random].id
    }catch(err){
      console.log(err, "123")
      return 0
    }
  }
}

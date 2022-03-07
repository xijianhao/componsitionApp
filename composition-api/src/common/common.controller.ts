import { Controller, Get, Post, Body, HttpCode, Param } from '@nestjs/common';
import { CommonService } from './common.service';

@Controller('common')
export class CommonController {
  constructor(private CmmonService: CommonService) {}
  // 获取已审核列表
  @Get('type-list')
  @HttpCode(200)
  async getList(): Promise<any> {
    return {
      code: 0,
      data: [
        { label: '老师', value: 1 },
        { label: '幸福', value: 2 },
        { label: '大自然', value: 3 },
        { label: '友情', value: 4 },
        { label: '青春', value: 5 },
        { label: '感动', value: 6 },
        { label: '童年趣事', value: 7 },
        { label: '节日', value: 8 },
        { label: '运动会', value: 9 },
        { label: '亲人', value: 10 },
        { label: '想象', value: 11 },
        { label: '感悟', value: 12 },
      ],
    };
  }
}

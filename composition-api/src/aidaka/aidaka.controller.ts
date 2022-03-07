import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AidakaService } from './aidaka.service';

@Controller('aidaka')
export class AidakaController {
  constructor(private aidakaService: AidakaService) {}

  // 获取列表详情
  @Post('login')
  @HttpCode(200)
  async getList(@Body() res: any): Promise<any> {
    const data = await this.aidakaService.login(res.code);
    return {
      code: 0,
      data: data,
    };
  }
}

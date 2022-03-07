import { Controller ,Get, Post,Body, HttpCode, Param } from '@nestjs/common';
import {ComponsitionService} from './componsition.service'
import {CreateComponsitonDto, AtditDto} from './componsition-dto'

@Controller('componsition')
export class ComponsitionController {
    constructor(private ComponsitionService: ComponsitionService) {
  }
  // 获取已审核列表
  @Get('pass-list')
  @HttpCode(200)
  async getList(): Promise<any> {
    const data = await this.ComponsitionService.getList(0)
    return {
      code: 0,
      data: data
    }
  }

  // 获取待审核列表
  @Get('audit-list')
  @HttpCode(200)
  async getAuditList(): Promise<any> {
    const data = await this.ComponsitionService.getList(1)
    return {
      code: 0,
      data: data
    }
  }

  // 获取列表详情
  @Get(':id')
  @HttpCode(200)
  async getDetail(@Param() params): Promise<any> {
    const data = await this.ComponsitionService.getDetail(params.id)
    return {
      code: 0,
      data: data
    }
  }

  // 创建文章
  @Post()
  @HttpCode(200)
  async onCreate(@Body() res: CreateComponsitonDto): Promise<any> {
    return {
      code: 0,
      data: await this.ComponsitionService.onCreate(res)
    }
  }

  // 审核文章
  @Post('audit')
  @HttpCode(200)
  async onAudit(@Body() res: AtditDto): Promise<any> {
    const params = {
      id:res.id,
      status: res.status
    }
    const result = await this.ComponsitionService.onAudit(params)
    return {
      code: 0,
      data: result
    }
  }
}

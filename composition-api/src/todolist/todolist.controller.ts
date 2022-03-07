import { Controller ,Get, Post,Body, HttpCode, Put, Delete } from '@nestjs/common';
import {TodolistService} from './todolist.service'
import {AddListDto, DoneItemtDto} from './todolist-dto'

@Controller('todolist')
export class TodolistController {
  constructor(private todolistService: TodolistService) { 
  }
  
  // 获取列表详情
  @Get('list')
  @HttpCode(200)
  async getList(): Promise<any> {
    const data = await this.todolistService.getList()
    return {
      code: 0,
      data: data
    }
  }

  // 添加
  @Post('add')
  @HttpCode(200)
  async addList(@Body() res: AddListDto): Promise<any> {
    const data = await this.todolistService.addItem(res)

    return data
  }

  // 修改状态
  @Put('put')
  @HttpCode(200)
  async updateItem(@Body() res: DoneItemtDto): Promise<any> {
    const data = await this.todolistService.updateItem({ id:res.id, status: res.status})
    return {
      code: 0,
      data: data
    }
  }

  // 删除
  @Delete('delete')
  @HttpCode(200)
  async delItem(@Body() res: DoneItemtDto): Promise<any> {
    const data = await this.todolistService.delItem(res.id)
    return {
      code: 0,
      data: data
    }
  }
}

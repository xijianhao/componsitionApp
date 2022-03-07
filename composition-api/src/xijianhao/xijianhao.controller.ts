import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { XijianhaoService } from './xijianhao.service';
import { CreateXijianhaoDto } from './dto/create-xijianhao.dto';
import { UpdateXijianhaoDto } from './dto/update-xijianhao.dto';

@Controller('xijianhao')
export class XijianhaoController {
  constructor(private readonly xijianhaoService: XijianhaoService) {}

  @Post()
  create(@Body() createXijianhaoDto: CreateXijianhaoDto) {
    return this.xijianhaoService.create(createXijianhaoDto);
  }

  @Get()
  findAll() {
    return this.xijianhaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.xijianhaoService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateXijianhaoDto: UpdateXijianhaoDto,
  ) {
    return this.xijianhaoService.update(+id, updateXijianhaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.xijianhaoService.remove(+id);
  }
}

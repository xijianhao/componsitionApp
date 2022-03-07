import { Injectable } from '@nestjs/common';
import { CreateXijianhaoDto } from './dto/create-xijianhao.dto';
import { UpdateXijianhaoDto } from './dto/update-xijianhao.dto';

@Injectable()
export class XijianhaoService {
  create(createXijianhaoDto: CreateXijianhaoDto) {
    return 'This action adds a new xijianhao';
  }

  findAll() {
    return `This action returns all xijianhao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} xijianhao`;
  }

  update(id: number, updateXijianhaoDto: UpdateXijianhaoDto) {
    return `This action updates a #${id} xijianhao`;
  }

  remove(id: number) {
    return `This action removes a #${id} xijianhao`;
  }
}

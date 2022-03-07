import { Module } from '@nestjs/common';
import { XijianhaoService } from './xijianhao.service';
import { XijianhaoController } from './xijianhao.controller';

@Module({
  controllers: [XijianhaoController],
  providers: [XijianhaoService],
})
export class XijianhaoModule {}

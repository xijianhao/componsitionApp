import { Test, TestingModule } from '@nestjs/testing';
import { XijianhaoController } from './xijianhao.controller';
import { XijianhaoService } from './xijianhao.service';

describe('XijianhaoController', () => {
  let controller: XijianhaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [XijianhaoController],
      providers: [XijianhaoService],
    }).compile();

    controller = module.get<XijianhaoController>(XijianhaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

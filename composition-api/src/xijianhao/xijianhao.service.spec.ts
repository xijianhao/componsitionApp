import { Test, TestingModule } from '@nestjs/testing';
import { XijianhaoService } from './xijianhao.service';

describe('XijianhaoService', () => {
  let service: XijianhaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XijianhaoService],
    }).compile();

    service = module.get<XijianhaoService>(XijianhaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

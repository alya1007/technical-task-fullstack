import { Test, TestingModule } from '@nestjs/testing';
import { DealResolver } from './deal.resolver';

describe('DealResolver', () => {
  let resolver: DealResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DealResolver],
    }).compile();

    resolver = module.get<DealResolver>(DealResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

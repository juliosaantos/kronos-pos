import { Test, TestingModule } from '@nestjs/testing';
import { ProductsOptionsService } from './products-options.service';

describe('ProductsOptionsService', () => {
  let service: ProductsOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsOptionsService],
    }).compile();

    service = module.get<ProductsOptionsService>(ProductsOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

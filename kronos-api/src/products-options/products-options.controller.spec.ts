import { Test, TestingModule } from '@nestjs/testing';
import { ProductsOptionsController } from './products-options.controller';
import { ProductsOptionsService } from './products-options.service';

describe('ProductsOptionsController', () => {
  let controller: ProductsOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsOptionsController],
      providers: [ProductsOptionsService],
    }).compile();

    controller = module.get<ProductsOptionsController>(ProductsOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

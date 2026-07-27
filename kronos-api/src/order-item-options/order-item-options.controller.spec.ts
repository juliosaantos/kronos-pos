import { Test, TestingModule } from '@nestjs/testing';
import { OrderItemOptionsController } from './order-item-options.controller';
import { OrderItemOptionsService } from './order-item-options.service';

describe('OrderItemOptionsController', () => {
  let controller: OrderItemOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderItemOptionsController],
      providers: [OrderItemOptionsService],
    }).compile();

    controller = module.get<OrderItemOptionsController>(OrderItemOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

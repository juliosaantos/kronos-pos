import { Test, TestingModule } from '@nestjs/testing';
import { OrderItemOptionsService } from './order-item-options.service';

describe('OrderItemOptionsService', () => {
  let service: OrderItemOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderItemOptionsService],
    }).compile();

    service = module.get<OrderItemOptionsService>(OrderItemOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { OrderItemOptionsService } from './order-item-options.service';
import { OrderItemOptionsController } from './order-item-options.controller';

@Module({
  controllers: [OrderItemOptionsController],
  providers: [OrderItemOptionsService],
})
export class OrderItemOptionsModule {}

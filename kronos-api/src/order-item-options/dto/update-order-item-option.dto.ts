import { PartialType } from '@nestjs/swagger';
import { CreateOrderItemOptionDto } from './create-order-item-option.dto';

export class UpdateOrderItemOptionDto extends PartialType(CreateOrderItemOptionDto) {}

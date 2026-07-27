import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus, OrderType } from '@prisma/client';
import {
  IsDecimal,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  tenantId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  customerId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  orderNumber: number;

  @IsEnum(OrderType)
  @IsNotEmpty()
  @ApiProperty({ example: 'DELIVERY' })
  type: OrderType;

  @IsEnum(OrderStatus)
  @IsNotEmpty()
  @ApiProperty({ example: 'ACCEPTED' })
  status: OrderStatus;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  paymentMethodId: number;

  @IsDecimal()
  @IsNotEmpty()
  @ApiProperty({ example: 10 })
  subtotal: number;

  @IsDecimal()
  @ApiProperty({ example: 10 })
  discount: number;

  @IsDecimal()
  @IsNotEmpty()
  @ApiProperty({ example: 10 })
  total: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  deliveryFee: number;

  @IsString()
  @ApiProperty({ example: 'delivery' })
  notes: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  createdByUserId: number;
}

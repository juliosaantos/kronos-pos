import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export enum PaymentMethodTypeDto {
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
  PIX = 'PIX',
  CASH = 'CASH',
}

export class CreatePaymentMethodDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  tenantId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Mastercard' })
  name: string;

  @IsEnum(PaymentMethodTypeDto)
  @IsNotEmpty()
  @ApiProperty({
    enum: PaymentMethodTypeDto,
    example: 'CREDIT_CARD',
  })
  type: PaymentMethodTypeDto;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ example: 'true' })
  isActive: boolean;
}

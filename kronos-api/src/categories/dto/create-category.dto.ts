import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  tenantId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'pizzas' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'diversas pizzas' })
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  order: number;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ example: 'true' })
  isActive: boolean;
}

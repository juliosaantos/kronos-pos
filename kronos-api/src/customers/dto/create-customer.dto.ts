import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { isNullishCoalesce } from 'typescript';

export class CreateCustomerDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  tenantId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'João' })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'das Neves' })
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '1234567890' })
  phone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'joaoda@gmail.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '1234567890' })
  document: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  neighborhoodId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Rua do limoeiro' })
  address: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '123' })
  number: string;

  @IsString()
  @ApiProperty({ example: 'Casa 1' })
  complement: string;

  @IsString()
  @ApiProperty({ example: 'portao azul' })
  reference: string;

  @IsBoolean()
  @ApiProperty({ example: true })
  isActive: boolean;
}

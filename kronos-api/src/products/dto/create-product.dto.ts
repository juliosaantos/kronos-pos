import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  tenantId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  categoryId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'pizza pepperoni' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'pizza pepperoni' })
  description: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  @ApiProperty({ example: 10 })
  price: number;

  @IsString()
  @ApiProperty({
    example:
      'https://firebasestorage.googleapis.com/v0/b/kronos-pos.appspot.com/o/users%2Fslim%40shade.com%2Fprofile.png?alt=media&token=a3a5c0e4-b6a0-4c5f-a2c9-c1b2a4d5d6e7',
  })
  imageUrl: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ example: 'true' })
  isAvailable: boolean;
}

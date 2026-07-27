import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDecimal, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductsOptionDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    tenantId: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    productId: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'pizza pepperoni' })
    name: string;

    @IsDecimal()
    @IsNotEmpty()
    @ApiProperty({ example: 10 })
    price: number;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({ example: 'true' })
    isAvailable: boolean;
}

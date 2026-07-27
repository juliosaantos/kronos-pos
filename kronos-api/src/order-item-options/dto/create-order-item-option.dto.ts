import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrderItemOptionDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    tenantId: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    orderItemId: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    productOptionId: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'pizza pepperoni' })
    productOptionName: string;

    @IsDecimal()
    @IsNotEmpty()
    @ApiProperty({ example: 10 })
    unitPrice: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    quantity: number;

    @IsDecimal()
    @IsNotEmpty()
    @ApiProperty({ example: 10 })
    total: number;
}

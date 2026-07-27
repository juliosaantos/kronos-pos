import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrderItemDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    tenantId: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    orderId: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    productId: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'pizza pepperoni' })
    productName: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    quantity: number;

    @IsDecimal()
    @IsNotEmpty()
    @ApiProperty({ example: 10 })
    unitPrice: number;

    @IsDecimal()
    @IsNotEmpty()
    @ApiProperty({ example: 10 })
    total: number;

    @IsString()
    @ApiProperty({ example: 'delivery' })
    notes: string;
}

import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateNeighborhoodDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    tenantId: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Slim Shade' })
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 10 })
    deliveryFee: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 40 })
    estimatedDeliveryTime: number;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({ example: 'true' })
    isActive: boolean;
}

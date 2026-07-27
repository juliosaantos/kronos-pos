import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTenantSettingDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    tenantId: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '10:00' })
    openingTime: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '18:00' })
    closingTime: string;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({ example: 'true' })
    allowDelivery: boolean;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({ example: 'true' })
    allowPickup: boolean;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({ example: 'true' })
    allowDineIn: boolean;
}

import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "@prisma/client";
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateTenantUserDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    tenantId: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    userId: number;

    @IsEnum(UserRole)
    @IsNotEmpty()
    @ApiProperty({ example: 'OWNER' })
    role: UserRole;

    @IsBoolean()
    @IsOptional()
    @ApiProperty({ example: 'true' })
    isActive: boolean;
}

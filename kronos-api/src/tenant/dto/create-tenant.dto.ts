import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTenantDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Slim Shade' })
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'slim records' })
    slug: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '123456789' })
    document: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '123456789' })
    phone: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'slim@shade.com' })
    email: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ example: 'https://firebasestorage.googleapis.com/v0/b/kronos-pos.appspot.com/o/users%2Fslim%40shade.com%2Fprofile.png?alt=media&token=a3a5c0e4-b6a0-4c5f-a2c9-c1b2a4d5d6e7' })
    logoUrl: string;

    @IsBoolean()
    @IsOptional()
    @ApiProperty({ example: 'true' })
    isActive: boolean;
}

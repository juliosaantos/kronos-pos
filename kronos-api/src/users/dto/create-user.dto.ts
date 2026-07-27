import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'UI_123456789' })
    firebaseUid: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Slim Shade' })
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'slim@shade.com' })
    email: string;

    @IsString()
    @ApiProperty({ example: 'https://firebasestorage.googleapis.com/v0/b/kronos-pos.appspot.com/o/users%2Fslim%40shade.com%2Fprofile.png?alt=media&token=a3a5c0e4-b6a0-4c5f-a2c9-c1b2a4d5d6e7' })
    photoUrl: string;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({ example: 'true' })
    isActive: boolean;
}

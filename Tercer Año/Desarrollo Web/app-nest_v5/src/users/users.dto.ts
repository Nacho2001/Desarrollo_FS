import { IsBoolean, IsEmail, IsOptional, IsString } from "class-validator";


export class UsersDto {
    id: number;

    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsEmail()
    email: true;

    @IsOptional()
    @IsBoolean()
    isActive?: boolean = true;
}
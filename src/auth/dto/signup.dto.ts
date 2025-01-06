import { IsString, MinLength, IsNotEmpty } from 'class-validator';

export class SignupDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @MinLength(6)
    password: string;
}


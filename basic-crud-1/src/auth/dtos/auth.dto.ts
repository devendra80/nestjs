import {
     IsEmail,
     IsNotEmpty,
     IsString,
     IsStrongPassword,
} from 'class-validator';

export class AuthDto {

     readonly firstname: string;
     readonly lastname: string;

     @IsEmail()
     @IsNotEmpty()
     readonly email: string;

     @IsString()
     @IsNotEmpty()
     @IsStrongPassword()
     readonly password: string;

     readonly phone: string;
     readonly source: string;

}

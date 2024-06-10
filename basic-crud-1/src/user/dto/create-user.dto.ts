import { IsDate, IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    user: string;

    @IsString()
    name?: string;
}

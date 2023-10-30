import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// ** Define a type
export class AuthDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

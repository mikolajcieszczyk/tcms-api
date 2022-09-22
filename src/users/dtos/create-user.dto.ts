import {
  IsString,
  IsEmail,
  MaxLength,
  MinLength,
  IsNotEmpty,
} from 'class-validator';
import { IsPasswordValid } from 'src/decorators/password.validator';

export class CreateuserDto {
  @IsEmail()
  email: string;

  @IsPasswordValid()
  @IsString()
  @MinLength(8, {
    message: 'Password is too short (min 8 characters)',
  })
  @MaxLength(64, {
    message: 'Password is too long (max 64 characters)',
  })
  @IsNotEmpty()
  password: string;
}

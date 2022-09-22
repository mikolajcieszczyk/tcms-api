import { IsEmail, IsString, IsOptional } from 'class-validator';
import { IsPasswordValid } from 'src/decorators/password.validator';

export class UpdateUserDto {
  @IsPasswordValid()
  @IsString()
  @IsOptional()
  password: string;

  @IsEmail()
  @IsOptional()
  email: string;
}

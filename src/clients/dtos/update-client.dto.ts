import { IsEmail, IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateClientDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  surname: string;

  @IsString()
  @IsOptional()
  male: string;

  @IsNumber()
  @IsOptional()
  age: number;

  @IsNumber()
  @IsOptional()
  phone: number;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  skills: string;
}

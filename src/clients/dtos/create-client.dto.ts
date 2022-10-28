import {
  IsNumber,
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateClientDto {
  @IsString({ message: 'Name field should a typeof string' })
  @MinLength(3, {
    message: 'Name is too short (min 3 characters)',
  })
  @MaxLength(20, {
    message: 'Name is too long (max 20 characters)',
  })
  name: string;

  @IsString({ message: 'Surname field should be a typeof string' })
  surname: string;

  @IsString({ message: 'Male field should be a typeof string' })
  gender: string;

  @IsNumber()
  age: number;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsString({ message: 'Skills field should be a typeof string' })
  skills: string;
}

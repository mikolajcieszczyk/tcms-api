import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  @IsNumber()
  court: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}

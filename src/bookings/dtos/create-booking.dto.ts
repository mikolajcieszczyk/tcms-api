import { IsNumber, IsNotEmpty, IsDate } from 'class-validator';

export class CreateBookingDto {
  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  @IsNumber()
  court: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}

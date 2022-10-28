import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  clientName: string;

  @IsString()
  start: Date;

  @IsString()
  end: Date;

  @IsNumber()
  court: number;

  @IsNumber()
  price: number;
}

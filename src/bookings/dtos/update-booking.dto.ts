import { IsNumber, IsDate, IsOptional } from 'class-validator';

export class UpdateBookingDto {
  @IsDate()
  @IsOptional()
  date: Date;

  @IsNumber()
  @IsOptional()
  court: number;

  @IsNumber()
  @IsOptional()
  price: number;
}

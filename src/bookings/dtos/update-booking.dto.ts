import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBookingDto {
  @IsString()
  @IsOptional()
  date: string;

  @IsNumber()
  @IsOptional()
  court: number;

  @IsNumber()
  @IsOptional()
  price: number;
}

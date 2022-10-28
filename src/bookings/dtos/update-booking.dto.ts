import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBookingDto {
  @IsString()
  @IsOptional()
  clientName: string;

  @IsString()
  @IsOptional()
  start: Date;

  @IsString()
  @IsOptional()
  end: string;

  @IsNumber()
  @IsOptional()
  court: number;

  @IsNumber()
  @IsOptional()
  price: number;
}

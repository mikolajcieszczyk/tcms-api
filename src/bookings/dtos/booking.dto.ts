import { Expose } from 'class-transformer';
import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';
export class BookingDto {
  @Expose()
  id: string;

  @Expose()
  clientName: string;

  @Type(() => Date)
  @IsDate()
  @Expose()
  start: Date;

  @Type(() => Date)
  @IsDate()
  @Expose()
  end: Date;

  @Expose()
  court: number;

  @Expose()
  price: number;
}

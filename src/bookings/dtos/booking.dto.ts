import { Expose } from 'class-transformer';

export class BookingDto {
  @Expose()
  id: number;

  @Expose()
  date: string;

  @Expose()
  court: number;

  @Expose()
  price: number;
}

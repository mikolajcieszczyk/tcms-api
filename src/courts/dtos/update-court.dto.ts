import { IsOptional, IsNumber, IsEnum } from 'class-validator';
import { Booking } from 'src/bookings/booking.model';
import { SurfaceEnum, PlacementEnum } from '../court.model';

export class UpdateCourtDto {
  @IsNumber()
  @IsOptional()
  number: number;

  @IsEnum(SurfaceEnum)
  @IsOptional()
  surface: SurfaceEnum;

  @IsEnum(PlacementEnum)
  @IsOptional()
  placement: PlacementEnum;
}

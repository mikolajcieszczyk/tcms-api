import { Expose } from 'class-transformer';
import { SurfaceEnum, PlacementEnum } from '../court.model';

export class CourtDto {
  @Expose()
  id: number;

  @Expose()
  number: number;

  @Expose()
  surface: SurfaceEnum;

  @Expose()
  placement: PlacementEnum;
}

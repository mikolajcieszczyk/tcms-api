import { Expose } from 'class-transformer';
import { SurfaceEnum, PlacementEnum, Court } from '../court.model';

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

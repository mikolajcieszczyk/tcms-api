import { IsNumber, IsEnum, IsNotEmpty } from 'class-validator';
import { SurfaceEnum, PlacementEnum } from '../court.model';

export class CreateCourtDto {
  @IsNumber()
  @IsNotEmpty()
  number: number;

  @IsEnum(SurfaceEnum)
  @IsNotEmpty()
  surface: SurfaceEnum;

  @IsEnum(PlacementEnum)
  @IsNotEmpty()
  placement: PlacementEnum;
}

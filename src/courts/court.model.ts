import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';
import { Booking, BookingSchema } from 'src/bookings/booking.model';

export type CourtDocument = Court & Document;

export enum SurfaceEnum {
  CLAY = 'Clay',
  HARD = 'Hard',
  GRASS = 'Grass',
  CARPET = 'Carpet',
  MULTISPORT = 'Multisport',
}

export enum PlacementEnum {
  INSIDE = 'Inside',
  OUTSIDE = 'Outside',
}

@Schema()
export class Court extends Document {
  @Prop()
  id: number;

  @Prop({ unique: true })
  @IsNotEmpty()
  number: number;

  @Prop()
  @IsNotEmpty()
  surface: SurfaceEnum;

  @Prop()
  @IsNotEmpty()
  placement: PlacementEnum;
}

export const CourtSchema = SchemaFactory.createForClass(Court);

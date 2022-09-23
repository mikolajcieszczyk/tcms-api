import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';

export type BookingDocument = Booking & Document;

@Schema()
export class Booking extends Document {
  @Prop()
  id: number;

  @Prop({ unique: true })
  @IsNotEmpty()
  date: Date;

  @Prop()
  @IsNotEmpty()
  court: number;

  @Prop()
  @IsNotEmpty()
  price: number;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);

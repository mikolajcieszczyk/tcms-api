import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';

export type BookingDocument = Booking & Document;

interface IClientData {
  name: string;
  surname: string;
}

@Schema()
export class Booking extends Document {
  @Prop()
  id: string;

  @Prop()
  clientName: string;

  @Prop()
  start: Date;

  @Prop()
  end: Date;

  @Prop()
  court: number;

  @Prop()
  price: number;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);

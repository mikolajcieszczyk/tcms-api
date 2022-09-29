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
  id: number;

  @Prop({ unique: true })
  @IsNotEmpty()
  date: string;

  @Prop()
  @IsNotEmpty()
  clientName: string;

  @Prop()
  @IsNotEmpty()
  clientSurname: string;

  @Prop()
  @IsNotEmpty()
  court: number;

  @Prop()
  @IsNotEmpty()
  price: number;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);

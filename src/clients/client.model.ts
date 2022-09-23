import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Booking, BookingSchema } from 'src/bookings/booking.model';

export type ClientDocument = Client & Document;

@Schema()
export class Client extends Document {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  male: string;

  @Prop()
  age: number;

  @Prop({ unique: true })
  phone: number;

  @Prop({ unique: true })
  email: string;

  @Prop()
  skills: string;

  @Prop({ type: BookingSchema })
  bookings: Booking; // change
}

export const ClientSchema = SchemaFactory.createForClass(Client);

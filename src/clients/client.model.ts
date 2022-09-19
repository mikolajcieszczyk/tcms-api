import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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

  @Prop()
  phone: number;

  @Prop()
  email: string;

  @Prop()
  skills: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);

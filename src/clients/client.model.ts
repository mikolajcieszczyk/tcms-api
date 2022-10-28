import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema()
export class Client extends Document {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  gender: string;

  @Prop()
  age: number;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  skills: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);

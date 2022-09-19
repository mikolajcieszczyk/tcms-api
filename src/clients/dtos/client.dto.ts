import { Expose } from 'class-transformer';

export class ClientDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  surname: string;

  @Expose()
  male: string;

  @Expose()
  age: number;

  @Expose()
  phone: number;

  @Expose()
  email: string;

  @Expose()
  skills: string;
}

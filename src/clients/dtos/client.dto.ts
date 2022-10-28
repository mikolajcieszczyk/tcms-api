import { Expose } from 'class-transformer';

export class ClientDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  surname: string;

  @Expose()
  gender: string;

  @Expose()
  age: number;

  @Expose()
  phone: string;

  @Expose()
  email: string;

  @Expose()
  skills: string;
}

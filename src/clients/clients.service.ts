import { Injectable } from '@nestjs/common';
import { Client, ClientDocument } from './client.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClientDto } from './dtos/create-client.dto';
import { ClientDto } from './dtos/client.dto';
import { UpdateClientDto } from './dtos/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name)
    private readonly clientModel: Model<ClientDocument>,
  ) {}

  async find(id: number) {
    const client: Client = await this.clientModel.findById(id);

    return client;
  }

  async findAllClients() {
    const clients = await this.clientModel.find().exec();

    return clients.map((client) => {
      return {
        id: client._id,
        name: client.name,
        surname: client.surname,
        male: client.male,
        age: client.age,
        phone: client.phone,
        email: client.email,
        skills: client.skills,
      };
    });
  }

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const client = new this.clientModel(createClientDto);
    const saveClient = await client.save();

    return saveClient;
  }

  async update(id: number, attributes: Partial<UpdateClientDto>) {
    const updatedClient = await this.find(id);

    // if (attributes.name) {
    //   updatedClient.name = attributes.name;
    // }
    // if (attributes.surname) {
    //   updatedClient.surname = attributes.surname;
    // }
    // if (attributes.male) {
    //   updatedClient.male = attributes.male;
    // }
    // if (attributes.age) {
    //   updatedClient.age = attributes.age;
    // }
    // if (attributes.phone) {
    //   updatedClient.phone = attributes.phone;
    // }
    // if (attributes.email) {
    //   updatedClient.email = attributes.email;
    // }
    // if (attributes.skills) {
    //   updatedClient.skills = attributes.skills;
    // }

    Object.assign(updatedClient, attributes);

    updatedClient.save();

    return updatedClient;
  }

  async remove(id: number) {
    const client = await this.clientModel.findOne({ id });

    return this.clientModel.remove(client);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Delete,
  BadRequestException,
  Patch,
  UseGuards,
  ParseIntPipe,
  HttpStatus,
} from '@nestjs/common';
import mongoose from 'mongoose';
import { AuthenticatedGuard } from 'src/auth/guards/authenticated.guard';
import { ClientsService } from './clients.service';
import { ClientDto } from './dtos/client.dto';
import { CreateClientDto } from './dtos/create-client.dto';
import { UpdateClientDto } from './dtos/update-client.dto';

// @UseGuards(AuthenticatedGuard)
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get('/:id')
  async getSingleClient(
    @Param('id')
    id: number,
  ): Promise<ClientDto> {
    let singleClientToFind: ClientDto;

    try {
      singleClientToFind = await this.clientsService.find(id);
    } catch (error) {
      throw new NotFoundException('Client not found');
    }

    return singleClientToFind;
  }

  @Get()
  async getAllClients(): Promise<ClientDto> {
    let clientsToFind;

    try {
      clientsToFind = await this.clientsService.findAll();
    } catch (error) {
      throw new NotFoundException('Clients not found');
    }

    return clientsToFind;
  }

  @Post('/add')
  async postClient(@Body() body: CreateClientDto) {
    let clientToAdd: CreateClientDto;

    try {
      clientToAdd = await this.clientsService.create(body);
      console.log(clientToAdd);
    } catch (error) {
      console.log(error);
      throw new BadRequestException(
        'Something went wrong while adding a new client',
      );
    }

    return clientToAdd;
  }

  @Patch('/update/:id')
  async updateClient(@Param('id') id: number, @Body() body: UpdateClientDto) {
    let clientToUpdate;

    try {
      console.log(clientToUpdate);

      clientToUpdate = await this.clientsService.update(id, body);
    } catch (error) {
      throw new NotFoundException('Client to remove not found');
    }

    return clientToUpdate;
  }

  @Delete('/remove/:id')
  async deleteClient(@Param('id') id: any) {
    let clientToRemove: any;

    try {
      clientToRemove = await this.clientsService.remove(id);
      console.log(clientToRemove);
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Client to remove not found');
    }

    return clientToRemove;
  }
}

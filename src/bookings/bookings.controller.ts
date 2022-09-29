import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingDto } from './dtos/booking.dto';
import { CreateBookingDto } from './dtos/create-booking.dto';
import { UpdateBookingDto } from './dtos/update-booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Get('/:id')
  async getSingleBooking(@Param('id') id: number): Promise<BookingDto> {
    let singleBookingToFind: BookingDto;

    try {
      singleBookingToFind = await this.bookingsService.find(id);
    } catch (error) {
      throw new NotFoundException('Booking not found');
    }

    return singleBookingToFind;
  }

  @Get()
  async getAllBookings(): Promise<BookingDto> {
    let bookingsToFind;

    try {
      bookingsToFind = await this.bookingsService.findAll();
    } catch (error) {
      throw new NotFoundException('Bookings not found');
    }

    return bookingsToFind;
  }

  @Post('/add')
  async postBooking(@Body() body: CreateBookingDto) {
    let bookingToAdd: CreateBookingDto;

    try {
      bookingToAdd = await this.bookingsService.create(body);
    } catch (error) {
      throw new BadRequestException(error);
    }

    return bookingToAdd;
  }

  @Patch('/update/:id')
  async updateBooking(@Param('id') id: number, @Body() body: UpdateBookingDto) {
    let bookingToUpdate;

    try {
      bookingToUpdate = await this.bookingsService.update(id, body);
    } catch (error) {
      throw new NotFoundException(error);
    }

    return bookingToUpdate;
  }

  @Delete('/remove/:id')
  async deleteBooking(@Param('id') id: number) {
    let bookingToRemove: BookingDto;

    try {
      bookingToRemove = await this.bookingsService.remove(id);
    } catch (error) {
      throw new NotFoundException(error);
    }

    return bookingToRemove;
  }
}

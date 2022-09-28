import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Court, CourtDocument } from 'src/courts/court.model';
import { Booking, BookingDocument } from './booking.model';
import { CreateBookingDto } from './dtos/create-booking.dto';
import { UpdateBookingDto } from './dtos/update-booking.dto';

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(Booking.name)
    private readonly bookingModel: Model<BookingDocument>,
    @InjectModel(Court.name)
    private readonly courtModel: Model<CourtDocument>,
  ) {}

  async find(id: number) {
    const booking: Booking = await this.bookingModel.findById(id);

    return booking;
  }

  async findAllBookings() {
    const bookings = await this.bookingModel.find().exec();

    return bookings.map((booking) => {
      return {
        id: booking._id,
        date: booking.date,
        court: booking.court,
        price: booking.price,
      };
    });
  }

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const booking = new this.bookingModel(createBookingDto);
    const saveBooking = await booking.save();

    return saveBooking;
  }

  async update(id: number, attributes: Partial<UpdateBookingDto>) {
    const bookingToUpdate = await this.find(id);

    Object.assign(bookingToUpdate, attributes);

    bookingToUpdate.save();

    return bookingToUpdate;
  }

  async remove(id: number) {
    const booking = await this.bookingModel.findOne({ id });

    return this.bookingModel.remove(booking);
  }
}

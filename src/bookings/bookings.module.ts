import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Court, CourtSchema } from 'src/courts/court.model';
import { Booking, BookingSchema } from './booking.model';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { CourtsService } from 'src/courts/courts.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Booking.name,
        schema: BookingSchema,
      },
    ]),
  ],
  providers: [BookingsService],
  controllers: [BookingsController],
  exports: [BookingsService],
})
export class BookingsModule {}

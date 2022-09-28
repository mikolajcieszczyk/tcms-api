import { Module } from '@nestjs/common';
import { CourtsService } from './courts.service';
import { CourtsController } from './courts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Court, CourtSchema } from './court.model';
import { Booking, BookingSchema } from 'src/bookings/booking.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Court.name,
        schema: CourtSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Booking.name,
        schema: BookingSchema,
      },
    ]),
  ],
  providers: [CourtsService],
  controllers: [CourtsController],
  exports: [CourtsService],
})
export class CourtsModule {}

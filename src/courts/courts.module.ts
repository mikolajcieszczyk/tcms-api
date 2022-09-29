import { Module } from '@nestjs/common';
import { CourtsService } from './courts.service';
import { CourtsController } from './courts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Court, CourtSchema } from './court.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Court.name,
        schema: CourtSchema,
      },
    ]),
  ],
  providers: [CourtsService],
  controllers: [CourtsController],
  exports: [CourtsService],
})
export class CourtsModule {}

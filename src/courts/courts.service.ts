import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Court, CourtDocument } from './court.model';
import { CreateCourtDto } from './dtos/create-court.dto';
import { UpdateCourtDto } from './dtos/update-court.dto';

@Injectable()
export class CourtsService {
  constructor(
    @InjectModel(Court.name)
    private readonly courtModel: Model<CourtDocument>,
  ) {}

  async find(number: number) {
    const court: Court = await this.courtModel.findOne({ number }).exec();

    return court;
  }

  async findAllCourts() {
    const courts = await this.courtModel.find().exec();

    return courts.map((court) => {
      return {
        id: court._id,
        number: court.number,
        surface: court.surface,
        placement: court.placement,
      };
    });
  }

  async create(createCourtDto: CreateCourtDto): Promise<Court> {
    const court = new this.courtModel(createCourtDto);
    const saveCourt = await court.save();

    return saveCourt;
  }

  async update(number: number, attributes: Partial<UpdateCourtDto>) {
    const courtToUpdate = await this.find(number);

    Object.assign(courtToUpdate, attributes);

    courtToUpdate.save();

    return courtToUpdate;
  }

  async remove(number: number) {
    const court = await this.courtModel.findOne({ number });

    return this.courtModel.remove(court);
  }
}

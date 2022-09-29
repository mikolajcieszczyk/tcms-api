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
  UseGuards,
} from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/guards/authenticated.guard';
import { CourtsService } from './courts.service';
import { CourtDto } from './dtos/court.dto';
import { CreateCourtDto } from './dtos/create-court.dto';
import { UpdateCourtDto } from './dtos/update-court.dto';

// @UseGuards(AuthenticatedGuard)
@Controller('courts')
export class CourtsController {
  constructor(private readonly courtsService: CourtsService) {}

  @Get('/:number')
  async getSingleCourt(@Param('number') number: number): Promise<CourtDto> {
    let singleCourtToFind: CourtDto;

    try {
      singleCourtToFind = await this.courtsService.find(number);
    } catch (error) {
      throw new NotFoundException('Court not found', error);
    }

    return singleCourtToFind;
  }

  @Get()
  async getAllCourts(): Promise<CourtDto> {
    let courtsToFind;

    try {
      courtsToFind = await this.courtsService.findAll();
    } catch (error) {
      throw new NotFoundException('Courts not found', error);
    }

    return courtsToFind;
  }

  @Post('/add')
  async postCourt(@Body() body: CreateCourtDto) {
    let courtToAdd: CreateCourtDto;

    try {
      courtToAdd = await this.courtsService.create(body);
    } catch (error) {
      throw new BadRequestException(
        'Something went wrong while adding court',
        error,
      );
    }

    return courtToAdd;
  }

  @Patch('/update/:number')
  async updateCourt(
    @Param('number') number: number,
    @Body() body: UpdateCourtDto,
  ) {
    let courtToUpdate;

    try {
      courtToUpdate = await this.courtsService.update(number, body);
    } catch (error) {
      throw new NotFoundException('Court to update not found');
    }

    return courtToUpdate;
  }

  @Delete('/remove/:number')
  async deleteCourt(@Param('number') number: number) {
    let courtToRemove: CourtDto;

    try {
      courtToRemove = await this.courtsService.remove(number);
    } catch (error) {
      throw new NotFoundException('Court to remove not found');
    }

    return courtToRemove;
  }
}

/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MedicationService } from './medication.service';
import { Medication } from './medication.entity';

@Controller('medications')
export class MedicationController {
  constructor(private readonly medicationService: MedicationService) {}

  @Get()
  findAll(): Promise<Medication[]> {
    return this.medicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Medication> {
    return this.medicationService.findOne(+id);
  }

  @Post()
  create(@Body() medication: Partial<Medication>): Promise<Medication> {
    return this.medicationService.create(medication);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() medication: Partial<Medication>,
  ): Promise<Medication> {
    return this.medicationService.update(+id, medication);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.medicationService.remove(+id);
  }
}


import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import { Pharmacy } from './pharmacy.entity';

@Controller('pharmacies')
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Get()
  findAll(): Promise<Pharmacy[]> {
    return this.pharmacyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Pharmacy> {
    return this.pharmacyService.findOne(+id);
  }

  @Post()
  create(@Body() pharmacy: Partial<Pharmacy>): Promise<Pharmacy> {
    return this.pharmacyService.create(pharmacy);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() pharmacy: Partial<Pharmacy>,
  ): Promise<Pharmacy> {
    return this.pharmacyService.update(+id, pharmacy);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.pharmacyService.remove(+id);
  }
}


import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { StockService } from './stock.service';
import { Stock } from './stock.entity';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  findAll(
    @Query('pharmacieId') pharmacieId?: string,
    @Query('medicamentId') medicamentId?: string,
  ): Promise<Stock[]> {
    if (pharmacieId) {
      return this.stockService.findByPharmacy(+pharmacieId);
    }
    if (medicamentId) {
      return this.stockService.findByMedication(+medicamentId);
    }
    return this.stockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Stock> {
    return this.stockService.findOne(+id);
  }

  @Post()
  create(@Body() stock: Partial<Stock>): Promise<Stock> {
    return this.stockService.create(stock);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() stock: Partial<Stock>,
  ): Promise<Stock> {
    return this.stockService.update(+id, stock);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.stockService.remove(+id);
  }
}


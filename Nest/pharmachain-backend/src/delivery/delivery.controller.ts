import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { Delivery } from './delivery.entity';

@Controller('deliveries')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Get()
  findAll(@Query('userId') userId?: string): Promise<Delivery[]> {
    if (userId) {
      return this.deliveryService.findByUser(+userId);
    }
    return this.deliveryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Delivery> {
    return this.deliveryService.findOne(+id);
  }

  @Post()
  create(@Body() delivery: Partial<Delivery>): Promise<Delivery> {
    return this.deliveryService.create(delivery);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() delivery: Partial<Delivery>,
  ): Promise<Delivery> {
    return this.deliveryService.update(+id, delivery);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.deliveryService.remove(+id);
  }
}

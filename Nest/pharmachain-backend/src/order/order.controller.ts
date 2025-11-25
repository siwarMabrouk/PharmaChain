import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  findAll(
    @Query('pharmacieId') pharmacieId?: string,
    @Query('userId') userId?: string,
  ): Promise<Order[]> {
    if (userId) {
      return this.orderService.findByUser(+userId);
    }
    if (pharmacieId) {
      return this.orderService.findByPharmacy(+pharmacieId);
    }
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Order> {
    return this.orderService.findOne(id);
  }

  @Post()
  async create(@Body() order: Partial<Order>): Promise<Order> {
    try {
      console.log('Données reçues pour la commande:', order);
      const result = await this.orderService.create(order);
      console.log('Commande créée avec succès:', result);
      return result;
    } catch (error) {
      console.error('Erreur lors de la création de la commande:', error);
      throw error;
    }
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() order: Partial<Order>,
  ): Promise<Order> {
    return this.orderService.update(id, order);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.orderService.remove(id);
  }
}


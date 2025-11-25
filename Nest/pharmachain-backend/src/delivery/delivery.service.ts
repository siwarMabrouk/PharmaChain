/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Delivery } from './delivery.entity';

@Injectable()
export class DeliveryService {
  constructor(
    @InjectRepository(Delivery)
    private deliveryRepository: Repository<Delivery>,
  ) {}

  async findAll(): Promise<Delivery[]> {
    return this.deliveryRepository.find({ order: { createdAt: 'DESC' } });
  }

  async findByUser(userId: number): Promise<Delivery[]> {
    return this.deliveryRepository.find({
      where: { userId },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Delivery> {
    return this.deliveryRepository.findOne({ where: { id } });
  }

  async create(delivery: Partial<Delivery>): Promise<Delivery> {
    const newDelivery = this.deliveryRepository.create(delivery);
    return this.deliveryRepository.save(newDelivery);
  }

  async update(id: number, delivery: Partial<Delivery>): Promise<Delivery> {
    await this.deliveryRepository.update(id, delivery);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.deliveryRepository.delete(id);
  }
}


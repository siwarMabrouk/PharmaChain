/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async findAll(): Promise<Order[]> {
    return this.orderRepository.find({ order: { date: 'DESC' } });
  }

  async findByUser(userId: number): Promise<Order[]> {
    return this.orderRepository.find({
      where: { userId },
      order: { date: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Order> {
    return this.orderRepository.findOne({ where: { id } });
  }

  async findByPharmacy(pharmacieId: number): Promise<Order[]> {
    return this.orderRepository.find({
      where: [
        { pharmacieSourceId: pharmacieId },
        { pharmacieDestinationId: pharmacieId },
      ],
      order: { date: 'DESC' },
    });
  }

  async create(order: Partial<Order>): Promise<Order> {
    try {
      console.log('Service - Données reçues:', order);

      // Générer un ID unique si non fourni (max 10 caractères pour VARCHAR(10))
      if (!order.id) {
        // Générer un ID court de 4 caractères hexadécimaux
        order.id = Math.random().toString(36).substr(2, 4).toUpperCase();
      }
      console.log('Service - ID généré:', order.id);

      // Définir la date si non fournie
      if (!order.date) {
        order.date = new Date();
      }
      console.log('Service - Date définie:', order.date);

      console.log('Service - Création de l\'entité...');
      const newOrder = this.orderRepository.create(order);
      console.log('Service - Entité créée:', newOrder);

      console.log('Service - Sauvegarde dans la base de données...');
      const savedOrder = await this.orderRepository.save(newOrder);
      console.log('Service - Commande sauvegardée:', savedOrder);

      return savedOrder;
    } catch (error) {
      console.error('Service - ERREUR lors de la création:', error);
      console.error('Service - Message d\'erreur:', error.message);
      console.error('Service - Stack:', error.stack);
      throw error;
    }
  }

  async update(id: string, order: Partial<Order>): Promise<Order> {
    await this.orderRepository.update(id, order);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.orderRepository.delete(id);
  }
}


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stock } from './stock.entity';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private stockRepository: Repository<Stock>,
  ) {}

  async findAll(): Promise<Stock[]> {
    return this.stockRepository.find({
      relations: ['medication', 'pharmacy'],
    });
  }

  async findOne(id: number): Promise<Stock> {
    return this.stockRepository.findOne({
      where: { id },
      relations: ['medication', 'pharmacy'],
    });
  }

  async findByPharmacy(pharmacieId: number): Promise<Stock[]> {
    return this.stockRepository.find({
      where: { pharmacieId },
      relations: ['medication', 'pharmacy'],
    });
  }

  async findByMedication(medicamentId: number): Promise<Stock[]> {
    return this.stockRepository.find({
      where: { medicamentId },
      relations: ['medication', 'pharmacy'],
    });
  }

  async create(stock: Partial<Stock>): Promise<Stock> {
    const newStock = this.stockRepository.create(stock);
    return this.stockRepository.save(newStock);
  }

  async update(id: number, stock: Partial<Stock>): Promise<Stock> {
    await this.stockRepository.update(id, stock);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.stockRepository.delete(id);
  }
}


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pharmacy } from './pharmacy.entity';

@Injectable()
export class PharmacyService {
  constructor(
    @InjectRepository(Pharmacy)
    private pharmacyRepository: Repository<Pharmacy>,
  ) {}

  async findAll(): Promise<Pharmacy[]> {
    return this.pharmacyRepository.find({ relations: ['stocks', 'stocks.medication'] });
  }

  async findOne(id: number): Promise<Pharmacy> {
    return this.pharmacyRepository.findOne({
      where: { id },
      relations: ['stocks', 'stocks.medication'],
    });
  }

  async create(pharmacy: Partial<Pharmacy>): Promise<Pharmacy> {
    const newPharmacy = this.pharmacyRepository.create(pharmacy);
    return this.pharmacyRepository.save(newPharmacy);
  }

  async update(id: number, pharmacy: Partial<Pharmacy>): Promise<Pharmacy> {
    await this.pharmacyRepository.update(id, pharmacy);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.pharmacyRepository.delete(id);
  }
}


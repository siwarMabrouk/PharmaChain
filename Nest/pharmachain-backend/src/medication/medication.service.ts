import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medication } from './medication.entity';

@Injectable()
export class MedicationService {
  constructor(
    @InjectRepository(Medication)
    private medicationRepository: Repository<Medication>,
  ) {}

  async findAll(): Promise<Medication[]> {
    return this.medicationRepository.find({ relations: ['stocks'] });
  }

  async findOne(id: number): Promise<Medication> {
    return this.medicationRepository.findOne({
      where: { id },
      relations: ['stocks'],
    });
  }

  async create(medication: Partial<Medication>): Promise<Medication> {
    const newMedication = this.medicationRepository.create(medication);
    return this.medicationRepository.save(newMedication);
  }

  async update(id: number, medication: Partial<Medication>): Promise<Medication> {
    await this.medicationRepository.update(id, medication);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.medicationRepository.delete(id);
  }
}


import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Medication } from '../medication/medication.entity';
import { Pharmacy } from '../pharmacy/pharmacy.entity';

@Entity('stock')
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'medicament_id' })
  medicamentId: number;

  @Column({ name: 'pharmacie_id' })
  pharmacieId: number;

  @Column()
  quantite: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  prix: number;

  @ManyToOne(() => Medication, (medication) => medication.stocks)
  @JoinColumn({ name: 'medicament_id' })
  medication: Medication;

  @ManyToOne(() => Pharmacy, (pharmacy) => pharmacy.stocks)
  @JoinColumn({ name: 'pharmacie_id' })
  pharmacy: Pharmacy;
}

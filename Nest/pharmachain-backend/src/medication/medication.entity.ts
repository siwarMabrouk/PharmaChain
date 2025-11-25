import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Stock } from '../stock/stock.entity';

@Entity('medicaments')
export class Medication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  composant: string;

  @Column()
  type: string;

  @Column()
  dosage: string;

  @Column()
  forme: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => Stock, (stock) => stock.medication)
  stocks: Stock[];
}

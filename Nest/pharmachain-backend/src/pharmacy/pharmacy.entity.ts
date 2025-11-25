import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Stock } from '../stock/stock.entity';

@Entity('pharmacies')
export class Pharmacy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  adresse: string;

  @Column()
  telephone: string;

  @OneToMany(() => Stock, (stock) => stock.pharmacy)
  stocks: Stock[];
}

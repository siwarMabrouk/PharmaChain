/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
} from 'typeorm';

@Entity('commandes')
export class Order {
  @Column({ primary: true })
  id: string;

  @Column({ name: 'medicament_id', nullable: true })
  medicamentId: number;

  @Column({ name: 'medicament_nom', nullable: true })
  medicamentNom: string;

  @Column({ name: 'pharmacie_id', nullable: true })
  pharmacieId: number;

  @Column({ name: 'pharmacie_nom', nullable: true })
  pharmacieNom: string;

  @Column({ name: 'pharmacie_source_id', nullable: true })
  pharmacieSourceId: number;

  @Column({ name: 'pharmacie_source_nom', nullable: true })
  pharmacieSourceNom: string;

  @Column({ name: 'pharmacie_destination_id', nullable: true })
  pharmacieDestinationId: number;

  @Column({ name: 'pharmacie_destination_nom', nullable: true })
  pharmacieDestinationNom: string;

  @Column({ nullable: true })
  quantite: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  prix: number;

  @Column({ type: 'timestamp', nullable: true })
  date: Date;

  @Column({ name: 'user_id', nullable: true })
  userId: number;
}

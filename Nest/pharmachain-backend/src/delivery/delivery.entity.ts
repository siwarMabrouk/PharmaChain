/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('livraisons')
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'commande_id', nullable: true })
  commandeId: string;

  @Column({ name: 'medicament_nom', nullable: true })
  medicamentNom: string;

  @Column({ name: 'pharmacie_source_nom', nullable: true })
  pharmacieSourceNom: string;

  @Column({ name: 'pharmacie_destination_nom', nullable: true })
  pharmacieDestinationNom: string;

  @Column({ nullable: true })
  quantite: number;

  @Column({ name: 'date_depart', type: 'timestamp', nullable: true })
  dateDepart: Date;

  @Column({ name: 'date_livraison_estimee', type: 'timestamp', nullable: true })
  dateLivraisonEstimee: Date;

  @Column({ name: 'date_livraison_reelle', type: 'timestamp', nullable: true })
  dateLivraisonReelle: Date;

  @Column({ name: 'adresse_depart', type: 'text', nullable: true })
  adresseDepart: string;

  @Column({ name: 'adresse_destination', type: 'text', nullable: true })
  adresseDestination: string;

  @Column({ name: 'user_id', nullable: true })
  userId: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}


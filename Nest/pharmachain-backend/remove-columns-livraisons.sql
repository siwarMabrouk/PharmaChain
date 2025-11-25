-- Supprimer les colonnes distance_km, vehicule et statut de la table livraisons
ALTER TABLE livraisons DROP COLUMN IF EXISTS distance_km;
ALTER TABLE livraisons DROP COLUMN IF EXISTS vehicule;
ALTER TABLE livraisons DROP COLUMN IF EXISTS statut;


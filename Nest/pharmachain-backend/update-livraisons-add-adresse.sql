-- Ajouter la colonne adresse_livraison à la table livraisons existante
ALTER TABLE livraisons ADD COLUMN IF NOT EXISTS adresse_livraison TEXT;


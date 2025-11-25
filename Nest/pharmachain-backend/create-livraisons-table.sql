-- Créer la table livraisons
CREATE TABLE IF NOT EXISTS livraisons (
  id SERIAL PRIMARY KEY,
  commande_id VARCHAR(10),
  medicament_nom VARCHAR(255),
  pharmacie_source_nom VARCHAR(255),
  pharmacie_destination_nom VARCHAR(255),
  adresse_livraison TEXT,
  quantite INTEGER,
  statut VARCHAR(50) DEFAULT 'En préparation',
  livreur_nom VARCHAR(255),
  vehicule VARCHAR(100),
  date_depart TIMESTAMP,
  date_livraison_estimee TIMESTAMP,
  date_livraison_reelle TIMESTAMP,
  adresse_depart TEXT,
  adresse_destination TEXT,
  distance_km DECIMAL(10, 2),
  notes TEXT,
  user_id INTEGER,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_livraisons_user_id ON livraisons(user_id);
CREATE INDEX IF NOT EXISTS idx_livraisons_statut ON livraisons(statut);
CREATE INDEX IF NOT EXISTS idx_livraisons_commande_id ON livraisons(commande_id);


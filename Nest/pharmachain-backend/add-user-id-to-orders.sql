-- Ajouter la colonne user_id à la table commandes
ALTER TABLE commandes ADD COLUMN IF NOT EXISTS user_id INTEGER;

-- Optionnel: Ajouter une contrainte de clé étrangère vers la table users
-- ALTER TABLE commandes ADD CONSTRAINT fk_commandes_user FOREIGN KEY (user_id) REFERENCES users(id);


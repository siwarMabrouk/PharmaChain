-- Script pour insérer des données de test dans PharmaChain
-- Exécutez ce script APRÈS que NestJS ait créé les tables

-- Insertion des médicaments
INSERT INTO medicaments (nom, composant, type, dosage, forme, description) VALUES
('Paracétamol', 'Paracétamol', 'Antalgique', '500mg', 'Comprimé', 'Traitement de la douleur et de la fièvre'),
('Ibuprofène', 'Ibuprofène', 'Anti-inflammatoire', '400mg', 'Comprimé', 'Anti-inflammatoire non stéroïdien'),
('Amoxicilline', 'Amoxicilline', 'Antibiotique', '1g', 'Gélule', 'Antibiotique à large spectre'),
('Doliprane', 'Paracétamol', 'Antalgique', '1000mg', 'Comprimé effervescent', 'Antalgique et antipyrétique'),
('Aspirine', 'Acide acétylsalicylique', 'Antalgique', '500mg', 'Comprimé', 'Antalgique, antipyrétique et antiagrégant plaquettaire'),
('Ventoline', 'Salbutamol', 'Bronchodilatateur', '100µg', 'Inhalateur', 'Traitement de l''asthme'),
('Augmentin', 'Amoxicilline + Acide clavulanique', 'Antibiotique', '1g/125mg', 'Comprimé', 'Antibiotique à large spectre renforcé');

-- Insertion des pharmacies
INSERT INTO pharmacies (nom, adresse, telephone) VALUES
('Pharmacie Centrale', '15 Avenue Habib Bourguiba, Tunis', '+216 71 123 456'),
('Pharmacie de la Liberté', '42 Rue de la Liberté, Tunis', '+216 71 234 567'),
('Pharmacie du Lac', '8 Boulevard du Lac, Les Berges du Lac', '+216 71 345 678'),
('Pharmacie Essalem', '23 Avenue Mohamed V, Ariana', '+216 71 456 789');

-- Insertion du stock (après avoir récupéré les IDs)
-- Pharmacie Centrale (id=1)
INSERT INTO stock ("medicamentId", "pharmacieId", quantite, prix) VALUES
(1, 1, 150, 2.500),
(2, 1, 80, 4.200),
(3, 1, 45, 12.500),
(4, 1, 120, 3.800),
(5, 1, 90, 1.900);

-- Pharmacie de la Liberté (id=2)
INSERT INTO stock ("medicamentId", "pharmacieId", quantite, prix) VALUES
(1, 2, 200, 2.400),
(2, 2, 0, 4.500),
(4, 2, 75, 3.900),
(6, 2, 30, 15.000),
(7, 2, 25, 18.500);

-- Pharmacie du Lac (id=3)
INSERT INTO stock ("medicamentId", "pharmacieId", quantite, prix) VALUES
(1, 3, 100, 2.600),
(3, 3, 60, 12.000),
(5, 3, 110, 2.000),
(6, 3, 40, 14.800),
(7, 3, 35, 18.000);

-- Pharmacie Essalem (id=4)
INSERT INTO stock ("medicamentId", "pharmacieId", quantite, prix) VALUES
(2, 4, 95, 4.300),
(3, 4, 0, 12.500),
(4, 4, 85, 3.700),
(5, 4, 70, 1.950),
(7, 4, 50, 17.900);

-- Insertion de quelques commandes exemple
INSERT INTO commandes ("medicamentId", "medicamentNom", "pharmacieSourceId", "pharmacieSourceNom", "pharmacieDestinationId", "pharmacieDestinationNom", quantite, prix, date) VALUES
(2, 'Ibuprofène', 1, 'Pharmacie Centrale', 2, 'Pharmacie de la Liberté', 20, 4.200, NOW() - INTERVAL '2 days'),
(3, 'Amoxicilline', 3, 'Pharmacie du Lac', 4, 'Pharmacie Essalem', 15, 12.000, NOW() - INTERVAL '1 day'),
(6, 'Ventoline', 2, 'Pharmacie de la Liberté', 1, 'Pharmacie Centrale', 10, 15.000, NOW() - INTERVAL '5 hours');

-- Insertion de quelques alertes
INSERT INTO alertes ("pharmacieId", "pharmacieNom", "medicamentId", "medicamentNom", type, message, resolved, date) VALUES
(2, 'Pharmacie de la Liberté', 2, 'Ibuprofène', 'rupture', 'Stock épuisé - Réapprovisionnement urgent nécessaire', false, NOW() - INTERVAL '1 day'),
(4, 'Pharmacie Essalem', 3, 'Amoxicilline', 'rupture', 'Rupture de stock - Commande en cours', false, NOW() - INTERVAL '3 hours'),
(1, 'Pharmacie Centrale', 3, 'Amoxicilline', 'stock_bas', 'Stock faible - Moins de 50 unités disponibles', false, NOW() - INTERVAL '6 hours');


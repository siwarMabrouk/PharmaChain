-- Drop all tables to start fresh
DROP TABLE IF EXISTS alertes CASCADE;
DROP TABLE IF EXISTS commandes CASCADE;
DROP TABLE IF EXISTS stock CASCADE;
DROP TABLE IF EXISTS medicaments CASCADE;
DROP TABLE IF EXISTS pharmacies CASCADE;

-- Tables will be recreated automatically by TypeORM synchronize


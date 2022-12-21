
/* aqui é para entrar no banco de dados */
USE gamesstore;

/* fazer uma leitura de dados...*/
SELECT * FROM gamesstore.games_register;

/* deletando registros repetidos... */ 
DELETE FROM games_register WHERE id_games = 5;

        

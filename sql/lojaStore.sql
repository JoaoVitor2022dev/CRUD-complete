/* aqui é para entrar no banco de dados */
USE gamesstore;

/* fazer uma leitura de dados...*/
SELECT * FROM gamesstore.games;

/* deletando registros repetidos... */ 
DELETE FROM games WHERE idnew_table = 4;
DELETE FROM games WHERE idnew_table = 5;
DELETE FROM games WHERE idnew_table = 6;
DELETE FROM games WHERE idnew_table = 17;


        
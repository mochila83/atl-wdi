
1.
SELECT matchid, player FROM goal 
WHERE teamid = 'GER';

2.
SELECT id, stadium, team1, team2
FROM goal
JOIN game ON game.id = goal.matchid
WHERE matchid = 1012 LIMIT 1;

3.
SELECT player, teamid, stadium, mdate
FROM game
JOIN goal ON (id=matchid)
WHERE teamid = 'GER';

4. 
SELECT team1, team2, player
FROM game
JOIN goal ON (id=matchid)
WHERE player LIKE 'Mario%'

5.
SELECT player, teamid, coach, gtime
FROM goall
JOIN eteam ON teamid = id
WHERE gtime<=10;

6.
SELECT mdate, teamname
FROM game
JOIN game ON (team1 = eteam.id)
WHERE eteam.coach = 'Fernando Santos'

7.
SELECT player 
FROM goal
JOIN game ON game.id = goal.matchid
WHERE game.stadium = 'National Stadium, Warsaw';

8.
SELECT player
FROM goal JOIN game ON matchid = id
WHERE (team1 = 'GER' or team2 = 'GER')
AND teamid <> 'GER' LIMIT 5

9. SELECT teamname, COUNT (teamid)
FROM goal JOIN eteam ON (id=teamid)
GROUP BY teamname;

10.
SELECT stadium, COUNT(*) FROM
game JOIN goal ON (id = matchid)
GROUP BY stadium

11. 
SELECT matchid, mdate, COUNT(*)
FROM game
JOIN goal ON id=matchid
WHERE (team1 = 'POL' OR team2 = 'POL')
GROUP BY matchid,

12.
SELECT matchid, mdate, COUNT(*) FROM 
game JOIN goal ON (id= matchid)
WHERE teamid = 'GER'
GROUP BY matchid

13.
SELECT mdate,
team1,
    SUM(CASE WHEN teamid = team1 THEN 1 ELSE 0 END) AS score1,
    team2,
    SUM(CASE WHEN teamid = team2 THEN 1 ELSE 0 END) AS score2 FROM 
    game LEFT JOIN goal ON (id = matchid)
    GROUP BY id
    ORDER BY mdate, matchid, team1, team2
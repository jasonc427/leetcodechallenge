SELECT score, DENSE_RANK() over(order by score desc)'rank'
FROM Scores
ORDER BY score DESC
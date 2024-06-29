SELECT w1.id
FROM Weather w1
INNER JOIN Weather w2 on w2.recordDate = DATEADD(DAY, -1, w1.recordDate)
WHERE w1.temperature > w2.temperature
ORDER BY w1.recordDate, w2.recordDate
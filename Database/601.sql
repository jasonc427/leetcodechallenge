WITH cte AS
(
    SELECT s1.id
    FROM Stadium s1
    INNER JOIN Stadium s2 on s2.Id = (s1.Id-1)
    INNER JOIN Stadium s3 on s3.Id = (s2.Id-1)
    WHERE s1.people >= 100
    AND s2.people >=100
    AND s3.people >=100
)
SELECT id, visit_date, people
FROM Stadium
WHERE id IN
(
    SELECT id FROM cte
)
OR id IN
(
    SELECT (id-1) FROM cte
)
OR id IN
(
    SELECT (id-2) FROM cte
)
ORDER BY visit_date
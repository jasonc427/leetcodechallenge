SELECT t1.id, 
    CASE WHEN t1.p_id IS null THEN 'Root' 
    WHEN EXISTS(SELECT TOP 1 1 FROM Tree t3 WHERE t3.p_id = t1.id) THEN 'Inner' 
    ELSE 'Leaf' END 'type'
FROM Tree t1 
LEFT OUTER JOIN Tree t2 on t2.id = t1.p_id
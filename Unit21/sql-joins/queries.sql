-- write your queries here
SELECT * FROM owners;
SELECT * FROM vehicles;
SELECT * FROM vehicles v JOIN owners o on v.owner_id = o.id;
SELECT * FROM owners o JOIN vehicles v on v.owner_id = o.id;
-- SELECT o.first_name, o.last_name, COUNT(v) FROM owners o JOIN  vehicles v on v.owner_id = o.id
SELECT * FROM owners o FULL OUTER JOIN vehicles v on v.owner_id = o.id;
GROUP BY o.first_name, o.last_name ORDER BY o.first_name;

SELECT o.first_name, o.last_name, COUNT(v), ROUND(AVG(price)) AS cost FROM owners o JOIN  vehicles v on v.owner_id = o.id
GROUP BY o.first_name, o.last_name HAVING ROUND(AVG(price))  > 10000 AND COUNT(v) >= 2  ORDER BY o.first_name DESC;
select countries.country_name, maps.map_img, maps.map_img2, labs.step1, labs.step2, labs.step3, labs.step4, labs.step5, labs.step6
from countries
inner join maps
on countries.country_id = maps.country_id
inner join labs
on countries.country_id = labs.country_id
where countries.country_id = 2
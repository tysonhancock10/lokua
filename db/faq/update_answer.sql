update questions 
set answer = (${answer}) 
where questions_id = (${index})
returning *;
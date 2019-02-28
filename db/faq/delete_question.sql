delete from questions where questions_id = $1
returning *;

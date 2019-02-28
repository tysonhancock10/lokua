insert into lokuas (username, password)
values (${username}, ${password})
returning username;
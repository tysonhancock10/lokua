insert into questions(question_asked)
values (${question_asked})
returning question_asked;
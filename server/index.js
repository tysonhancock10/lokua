require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mc = require('./controllers/mainController')
const fq = require('./controllers/faqController')
const cc = require('./controllers/countriesController')
const app = express();
const sessions = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const massive = require('massive');


app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json())
app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: null }));

massive(CONNECTION_STRING).then(db => {
        app.set('db', db)
        app.listen(SERVER_PORT, () => 
        console.log( `we are at port`, SERVER_PORT ));
      });
app.post('/main/register', mc.register)
app.post('/main/login', mc.login)
app.get('/api/user', mc.getUser)
app.post('/main/logout', mc.logout)

// this is the faq endpoints

app.get('/api/faq', fq.getQuestions)
app.post('/faq/addquestion', fq.addQuestion)
app.delete(`/api/faq/:index`, fq.deleteQuestion)
app.put(`/api/faq/:index/edit`, fq.answerQuestion)

// this is the countries endpoints

app.get('/api/maps', cc.getGreece)
app.get('/api/mapsmexi', cc.getMexico)
app.get('/api/mapsrussi', cc.getRussia)
app.get('/api/mapsnige', cc.getNigeria)
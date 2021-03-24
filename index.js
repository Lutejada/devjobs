const mongoose = require('mongoose')
require('./config/db')

const express = require('express');
const router = require('./routers');
const path = require('path');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

require('dotenv').config({ path: 'variables.env' })

const hbs = require('express-handlebars')


const app = express();

// Motor de vistas
app.engine('handlebars',
    hbs({
        defaultLayout: 'layout'
    })
);

app.set('view engine', 'handlebars');

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieparser())

app.use(session({
    secret: process.env.SECRETO,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

app.use('/', router());


app.listen(process.env.PORT);
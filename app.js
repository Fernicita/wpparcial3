const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');
const i18n = require('i18n');
const {expressjwt} = require('express-jwt');
const jwtkey = config.get('secret.key');

//app.use(expressjwt({secret:JwtKey,algorithms:['HS256']}).unless({path:['/login']})); 

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
const backlogsRouter = require( './routes/backlogs.js');
const controlPanelRouter = require( './routes/controlPanel.js' );
const projectsRouter = require( './routes/projects.js' );
const loginRouter = require( './routes/login.js' );
const usersHistoryRouter = require( './routes/usersHistory.js' );
const sprintBacklogsRouter = require( './routes/sprintBacklogs.js' );
const releaseBacklogsRouter = require( './routes/releaseBacklogs.js' );

var app = express();
const url = config.get("dbChain");
mongoose.connect(url);
const db = mongoose.connection;
db.on('open', () => {
  console.log('Conectado a la base de datos');
});

db.on('error', (err) => {
  console.log('No se pudo conectar a la base de datos', err);
});

i18n.configure({
  locales:['es','en'], 
  cookie:'language',
  directory:`${__dirname}/locales`
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/backlogs', backlogsRouter);
app.use('/controlPanel', controlPanelRouter);
app.use('/projects', projectsRouter);
app.use('/login', loginRouter);
app.use('/usersHistory', usersHistoryRouter);
app.use('/sprintBacklogs', sprintBacklogsRouter);
  

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


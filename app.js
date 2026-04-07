var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');
const connectionString = process.env.MONGO_CON;
mongoose.connect(connectionString);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 
  'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connection to DB succeeded');
});
var chips = require("./models/chips");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sandwichrouter = require('./routes/sandwich');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var resourceRouter = require('./routes/resource');
var chipsRouter = require('./routes/chips');
var app = express();
async function recreateDB() {
  await chips.deleteMany();

  let instance1 = new chips({
    chipsBrand: "Lay's",
    chipsFlavor: "Classic",
    cost: 2.99
  });

  let instance2 = new chips({
    chipsBrand: "Doritos",
    chipsFlavor: "Nacho Cheese",
    cost: 3.49
  });

  let instance3 = new chips({
    chipsBrand: "Pringles",
    chipsFlavor: "Sour Cream & Onion",
    cost: 2.49
  });

  instance1.save()
    .then(doc => {
      console.log("First object saved");
    })
    .catch(err => {
      console.error(err);
    });

  instance2.save()
    .then(doc => {
      console.log("Second object saved");
    })
    .catch(err => {
      console.error(err);
    });

  instance3.save()
    .then(doc => {
      console.log("Third object saved");
    })
    .catch(err => {
      console.error(err);
    });
}

let reseed = true;
if (reseed) {
  recreateDB();
}
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sandwich', sandwichrouter);
app.use('/grid', gridRouter);
app.use('/selector', pickRouter);
app.use('/resource', resourceRouter);
app.use('/chips', chipsRouter);
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

const express = require('express');

const logger = require('./logger');
const argv = require('./argv');
const port = require('./port');

// const fs = require('fs');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const bookingRouter = require('./router.js');

const isDev = process.env.NODE_ENV !== 'production';

const app = express();

app.use(express.static(__dirname + '/../client/dist'));


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';


// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   // res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   next();
// });


// const port = 3003;

// app.use('/rooms', bookingRouter);

app.listen(port, host, function(err) {
  // console.log(`listening on port ${port}`);
  if (err) {
    return logger.error(err.message);
  }
});

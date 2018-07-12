require('dotenv').config()

const assert = require('assert');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const winston = require('winston');

const app = express();
// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  
  // Pass to next layer of middleware
  next();
  });

app.set('port', process.env.PORT );




app.use(cors({
  origin: (origin, callback) => {
    if ((process.env.CORS_WHITELIST || '5000').split(',').includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS.'));
    }
  }
}));


app.use(morgan('common'));

app.get('/', (req, res) => {
  res.json({ message: `The timestamp is ${new Date().toISOString()}.` });
});

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

const server = app.listen(app.get('port'), () => {
  winston.info(`Listening on port ${server.address().port}...`);
});
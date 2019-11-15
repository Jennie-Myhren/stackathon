const path = require('path');
const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT || 8080;
const app = express();
module.exports = app;

const createApp = () => {
  // logging middleware
  app.use(morgan('dev'));

  // body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // api routes
  // app.use('/api', require('./api'));

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')));

  //routes
  // app.use('/api', require('./api'));
  app.get('/', (req, res, next) => {
    res.sendStatus(200);
  });

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });

  //handler for 404 errors
  app.use((req, res, next) => {
    const err = new Error('API route not found!');
    err.status = 404;
    next(err);
  });

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log(`Making predictions on ${PORT}`)
  );
};

// const syncDb = () => db.sync();

async function bootApp() {
  await createApp();
  await startListening();
}

bootApp();

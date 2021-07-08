const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const database = require('./models/database');
const articles = require('./routes/articles');
const logger = require('./middleware/logger');
const morgan = require('morgan');

var colors = require('colors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Middlewares
// app.use(logger);

// Validating we are in development mode
if (process.env.NODE_ENV === 'DEVELOPMENT') {
  app.use(morgan('dev'));
}

database.connect();

app.get('/html', (req, res) => {
  res.send('<h1>Node.js + Express.js</h1>');
});

// Adding routes
app.use('/api/v1/articles', articles);

const PORT = process.env.PORT || 9001;

const server = app.listen(PORT, () => {
  console.log(
    `Server running on PORT = ${PORT} | MODE = ${process.env.NODE_ENV}`.red
  );
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});

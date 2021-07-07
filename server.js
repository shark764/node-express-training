const express = require('express');
const dotenv = require('dotenv');

const articles = require('./routes/articles');

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/html', (req, res) => {
  res.send('<h1>Node.js + Express.js</h1>');
});

// Adding routes
app.use('/api/v1/articles', articles);

const PORT = process.env.PORT || 9001;

const server = app.listen(PORT, () => {
  console.log(
    `Server running on PORT = ${PORT} | MODE = ${process.env.NODE_ENV}`
  );
});

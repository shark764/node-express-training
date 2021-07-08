const logger = (req, res, next) => {
  const { method, protocol, originalUrl } = req;
  console.log('Middleware - Logger ON');
  console.log(`${method} - ${protocol}://${req.get('host')}${originalUrl}`);

  req.something = `<h1>Hey my friend!</h1>`;

  let now = new Date();
  console.log('Date:', now);

  next();
};

module.exports = logger;

const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const connect = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_CONNECTION, {
      autoIndex: true,
      poolSize: 50,
      bufferMaxEntries: 0,
      keepAlive: 120,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.info('Mongo database connected');
  } catch (error) {
    console.error('Error to connect to database');
    throw error;
  }
};

module.exports = { connect };

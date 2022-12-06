const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
    })
    .then((data) => {
      console.log(`MongoDb is connected on server ${data.connection.host}`);
    });
};

module.exports = connectDatabase;

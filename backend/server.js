const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down the server due to  Uncaught Exception");
  process.exit(1);
});

// Config
dotenv.config({ path: "backend/config/.env" });

// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

//Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down the server due to unhandling promise rejection");

  server.close(() => {
    process.exit(1);
  });
});

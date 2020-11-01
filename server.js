const express = require("express");
const setHeaders = require("./utils/setAxiosHeaders");
const errorHandler = require("./middleware/error");

const app = express();
setHeaders();
app.use(express.json());

app.get("/", (req, res) => res.json("API RUNNING"));

app.use("/api/restaurants", require("./routes/restaurants"));
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // CLose server & exit process
  server.close(() => process.exit(1));
});

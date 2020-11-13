const express = require("express");
const setHeaders = require("./utils/setAxiosHeaders");
const errorHandler = require("./middleware/error");
const path = require("path");

const app = express();
setHeaders();
app.use(express.json());

// app.get("/", (req, res) => res.json("API RUNNING"));

app.use("/api/restaurants", require("./routes/restaurants"));
app.use("/api/reviews", require("./routes/reviews"));
app.use(errorHandler);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build")); //client/build will be our static fo;der (with index.html)
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); //go to index.html
  });
}

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

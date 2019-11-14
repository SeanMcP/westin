const path = require("path");
const express = require("express");
const cors = require("cors");
const env = require("dotenv").config({
  path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`)
});

if (env.error) {
  throw env.error;
}

const app = express();
app.use(cors());

const PORT = process.env.SERVER_PORT || 3001;

app.get("/", (request, response) => response.send("Hello from Westin Server!"));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

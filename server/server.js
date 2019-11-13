const express = require("express");

const app = express();

const PORT = process.env.SERVER_PORT || 3001;

app.get("/", (request, response) => response.send("Hello from Westin!"));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

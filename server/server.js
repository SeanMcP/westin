const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.SERVER_PORT || 3001;

app.get("/", (request, response) => response.send("Hello from Westin Server!"));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

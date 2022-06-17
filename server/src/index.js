const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/", routes);

app.listen(port, () => {
  console.log(
    process.env.HELLO_WORLD || "You need to create and populate your .env file"
  );
  console.log(`Example app listening on port ${port}`);
});

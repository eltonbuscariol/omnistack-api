const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const routes = require("./routes");
const { setupWebsocket } = require("./websockets");
// const connString = "mongodb+srv://omnistack:270483@elton-3b3tl.mongodb.net/week10?retryWrites=true&w=majority";
const connString = "mongodb://localhost/week10";

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(connString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

/* Init Mongoose */

const mongooseOptions = {
  user: "tjwu",
  pass: "83675518",
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  // [TW] unique compound index not working, need to debug
  autoIndex: true,
  keepAlive: true
};
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://cpsc436i.ftuby.mongodb.net/assignment`, mongooseOptions);
/* Test Mongoose Connection */

const db = mongoose.connection;
db.on("error", console.error.bind(console, "/server.mongoose: error connecting to db"));
db.once("open", function() {
  console.log("/server.mongoose: db connected");
})

global.mongoose = mongoose;

/* Init Express */

const app = express();

const allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
};
app.use(allowCrossDomain);
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

/* Schema */

const messageSchema = new mongoose.Schema({
  content: String,
  date: String
});

const Message = mongoose.model("Message", messageSchema);

/* Functions */

function getMessages(request, response) {
  const query = Message.find().exec();

  query.then(res => {
    return response.status(200).send(res);
  }).catch(error => {
    console.log(error);
    return response.status(500).send(error);
  })
}

function addMessage(request, response) {
  const entry = {
    content: request.body.content,
    date: request.body.date
  };

  const doc = new Message(entry);
  return doc.save().then(() => {
    return response.status(200).send(entry);
  }).catch(error => {
    console.log(error);
    return response.status(404).send(error);
  })
}

function clearMessages(request, response) {
  const query = Message.deleteMany().exec();

  query.then(() => {
    return response.status(200).send("ok");
  }).catch(error => {
    console.log(error);
    return response.status(500).send(error);
  })
}

/* Endpoints */

app.get("/", (request, response) => {
  response.status(200).send("ok");
});

app.get("/messages", getMessages);

app.post("/message", addMessage);

app.delete("/messages", clearMessages);

/* Thread */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("/server/app running on port %d", PORT);
});
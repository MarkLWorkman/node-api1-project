const express = require("express");
const cors = require("cors");
const model = require("./users/model");

const server = express();

server.use(express.json());
server.use(cors());

// POST api/users
server.post("/api/users", (req, res) => {});
// GET api/users
server.get("/api/users", async (req, res) => {
  const user = await model.find();
  if (!user) {
    res.status(500).send({
      message: "There was an error while saving the user to the database",
    });
  } else {
    res.status(200);
    res.send(user);
  }
});
// GET api/users/:id
server.get("/api/users/:id", (req, res) => {});
// DELETE api/users/:id
server.delete("/api/users/:id", (req, res) => {});
// PUT api/users/:id
server.put("/api/users/:id", (req, res) => {});

module.exports = server;

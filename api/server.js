const express = require("express");
const cors = require("cors");
const model = require("./users/model");

const server = express();

server.use(express.json());
server.use(cors());

// POST api/users
server.post("/api/users", async (req, res) => {
  if (req.body.name && req.body.bio) {
    const user = await model.insert({
      name: req.body.name,
      bio: req.body.bio,
    });
    res.status(201).send(user);
  } else if (req.body.name || req.body.bio) {
    res
      .status(400)
      .send({ message: "Please provide name and bio for the user" });
  } else {
    res.status(500).send({
      message: "There was an error while saving the user to the database",
    });
  }
});
// GET api/users
server.get("/api/users", async (req, res) => {
  try {
    const user = await model.find();
    res.status(200).send(user);
  } catch {
    res
      .status(500)
      .send({ message: "The users information could not be retrieved" });
  }
});
// GET api/users/:id
server.get("/api/users/:id", async (req, res) => {});
// DELETE api/users/:id
server.delete("/api/users/:id", async (req, res) => {});
// PUT api/users/:id
server.put("/api/users/:id", async (req, res) => {});

module.exports = server;

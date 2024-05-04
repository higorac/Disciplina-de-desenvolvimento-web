const express = require("express");
const server = express();
const path = require("path");

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

server.get("/perfil", (req, res) => {
  res.sendFile(path.join(__dirname + "/perfil.html"));
});

server.get("/tarefas", (req, res) => {
  res.sendFile(path.join(__dirname + "/tarefas.html"));
});

server.get("/registrar", (req, res) => {
  res.sendFile(path.join(__dirname + "/registrar.html"));
});

server.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname + "/projeto.html"));
});
server.listen(3000);

const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {

});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body

  repositorie = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  }
  repositories.push(repositorie)

  return response.status(200).json(repositorie)

});

app.put("/repositories/:id", (request, response) => {

});

app.delete("/repositories/:id", (request, response) => {
 
});

app.post("/repositories/:id/like", (request, response) => {
  
});

module.exports = app;

const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {

  return response.status(200).json(repositories)

});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body

  repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  }
  repositories.push(repository)

  return response.status(200).json(repository)

});

app.put("/repositories/:id", (request, response) => {

});

app.delete("/repositories/:id", (request, response) => {
  const {id} = request.params;

  const repoIndex = repositories.findIndex(repo => repo.id === id)

  if(repoIndex < 0){
    return response.status(400).json({error: 'Repositorie can not be find!'})
  }

  repositories.splice(repoIndex, 1)

  return response.status(204).send()
});

app.post("/repositories/:id/like", (request, response) => {
  
});

module.exports = app;

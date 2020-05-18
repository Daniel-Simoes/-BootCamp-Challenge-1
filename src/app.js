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
  const {title, url, techs} = request.body;
  const {id} = request.params;

  const repoIndex = repositories.findIndex(repo => repo.id === id)
  
  if (repoIndex < 0) {
    return response.status(400).json({error: 'Repositorie can not be find!'})
  }
  
  const repo = {
    id,
    title,
    url,
    techs,
    likes:repositories[repoIndex].likes
  }

  repositories[repoIndex] = repo

  return response.status(200).json(repo)

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
  const {id} = request.params;
  const repoIndex = repositories.findIndex(repo => repo.id === id)
  
  if(repoIndex < 0){
    return response.status(400).json({error: 'Repositorie not found!'})
  }
  
  const repo = repositories[repoIndex]
  const newRepo = {
    id,
    title: repo.title,
    url: repo.url,
    techs:repo.techs,
    likes: repo.likes + 1
  }

  repositories[repoIndex] = newRepo

  return response.status(200).json(newRepo)
});

module.exports = app;

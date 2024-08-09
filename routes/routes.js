import express from "express";

const router = express.Router()

export default (app) => {

  app.use(router.all('/', (req, res) => {
    res.send('API server for Github Action CICD')
  }));

}
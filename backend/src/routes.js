const express = require("express");
const PostController = require('./controllers/PostContrller');

const routes = new express.Router();

routes.post('/posts', PostController.store);

module.exports = routes;

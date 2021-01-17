const express = require('express');
const companyController = require('./controllers/companyController');
const routes = express.Router();




routes.post('/companycad', companyController.save);
routes.get('/companylist', companyController.list);



module.exports = routes;
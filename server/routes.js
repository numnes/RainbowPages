const express = require('express');
const companyController = require('./controllers/companyController');
constfeedbackController = require('./controllers/feedbackController');
const routes = express.Router();

routes.post('/companycad', companyController.create);
routes.post('/companycadMultiple', companyController.createMultiple);
routes.get('/companylist', companyController.index);
routes.post('/companylistFiltered', companyController.indexFiltered);
routes.get('/companylistVip', companyController.indexVips);

module.exports = routes;
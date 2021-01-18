const express = require('express');
const companyController = require('./controllers/companyController');
const feedbackController = require('./controllers/feedbackController');
const routes = express.Router();

// Empresa
routes.post('/companycad', companyController.create);
routes.post('/companycadMultiple', companyController.createMultiple);
routes.get('/companylist', companyController.index);
routes.post('/companylistFiltered', companyController.indexFiltered);
routes.post('/companylistById', companyController.indexById);
routes.get('/companylistVip', companyController.indexVips);

// Comentarios
routes.post('/cometaryCreate', feedbackController.create);
routes.post('/comentaryList', feedbackController.index);



module.exports = routes;
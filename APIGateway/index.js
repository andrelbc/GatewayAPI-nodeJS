const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const port = 3000;
const {
  USERS_API_URL,
  PRODUCTS_API_URL,
} = require('./URLs');

// O httpProxy vai trabalhar com proxy para pegar as requisições dos microserviços 

const userServiceProxy = httpProxy(USERS_API_URL);
const productsServiceProxy = httpProxy(PRODUCTS_API_URL);

app.get('/', (req, res) => res.send('Gateway API raiz'));

app.get('/users', (req, res) => userServiceProxy(req, res));
app.get('/products', (req, res) => productsServiceProxy(req, res));

app.listen(port, () => console.log(`Rodando na porta ${port}!`));
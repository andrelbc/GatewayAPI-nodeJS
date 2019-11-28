const app = require('express')();

app.get('/products', function(req, res){

  res.contentType('application/json');

  var products = [
    { name: 'AMD Radeon RX580', product_id: '1' },
    { name: 'Nvidia RTX 2080TI ', product_id: '2' },
    { name: 'Asus ROG Strix Scar III', product_id: '3' },
    { name: 'AMD Ryzen 7 3800X', product_id: '4' },
    { name: 'AMD Ryzen 7 2700X', product_id: '5' },
    { name: 'Intel Core i9-9900K', product_id: '6' },
    { name: 'Noctua NH-D15', product_id: '7' },
    { name: 'Arctic Freezer 34 Esports Duo', product_id: '8' }
  ];

  var productsJSON = JSON.stringify(products);

  res.send(productsJSON);
});

app.listen(3002, () => console.log(`Products API rodando na porta 3002`));
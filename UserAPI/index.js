const app = require('express')();

app.get('/users', function(req, res){

    // Informando para o navegador o tipo de resposta
  res.contentType('application/json');

  // dados no formato json
  var users = [
    { name: 'David', id: '1' },
    { name: 'André', id: '2' },
    { name: 'Maria', id: '3' },
    { name: 'Jonas', id: '4' },
    { name: 'Heitor', id: '5' },
    { name: 'Dennys', id: '6' },
    { name: 'José', id: '7' },
    { name: 'Krappa', id: '8' }
  ];

  // A função JSON.stringfy() serializa os nossos dados
  var usersJSON = JSON.stringify(users);

  // O método send envia a string com os dados para o navegador como resposta 
  res.send(usersJSON);
});

app.listen(3001, () => console.log(`Users API rodando na porta 3001`));
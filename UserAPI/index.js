const app = require('express')();

app.get('/users', function(req, res){

    // We want to set the content-type header so that the browser understands
  //  the content of the response.
  res.contentType('application/json');

  // Normally, the data is fetched from a database, but we can cheat:
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

  // Since the request is for a JSON representation of the people, we
  //  should JSON serialize them. The built-in JSON.stringify() function
  //  does that.
  var usersJSON = JSON.stringify(users);

  // Now, we can use the response object's send method to push that string
  //  of people JSON back to the browser in response to this request:
  res.send(usersJSON);
});

app.listen(3001, () => console.log(`Users API rodando na porta 3001`));
var express = require('express');
var app = express();

app.get('/', (req,res) => {
    res.send('Hello Express')
})

const mySecret = process.env['MESSAGE_STYLE']

app.get('/json', (req,res) => {
  if(mySecret === 'uppercase') {res.send({"message": "HELLO JSON"})}
  else{
    res.send({"message": "hello json"})
  }
})



































 module.exports = app;

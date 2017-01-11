var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello yoyo!')
})

app.post('/', function (req, res) {
  res.send('Hello Chen!')
})

app.put('/user', function (req, res) {
  res.send('Hello Tian!')
})

app.delete('/user', function (req, res) {
  res.send('Hello Qi')
})

app.listen(3000, function () {
  console.log('Example app listening on 3000')
})

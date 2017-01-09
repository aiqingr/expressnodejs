var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello yoyo!')
})

app.listen(3000, function () {
  console.log('Example app listening on 3000')
})

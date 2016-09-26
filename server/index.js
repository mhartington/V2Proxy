var express = require('express')
var app = express()

app.get('/api/feed', function(req, res) {
  res.json({name: 'feed', items: ['first', 'second']})
})

var server = app.listen(3333, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

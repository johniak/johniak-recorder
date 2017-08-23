const express = require('express')
const app = express()
isRecording=false;
app.get('/isRecording/', function (req, res) {
  res.send(isRecording)
})
app.get('/changeState', function (req, res) {
  isRecording=!isRecording
  res.send(isRecording)
})
app.listen(process.env.PORT, function () {
  console.log('Example app listening on port'+process.env.PORT+'!')
})

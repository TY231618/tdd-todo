const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(PORT, err => {
  if (err) return console.log('Server start up failed: ', err)

  console.log('Server start up SUCCESSFULL on port: ', PORT)
});
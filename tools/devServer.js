const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) return console.log('Server start up failed: ', err)

  console.log('Server start up SUCCESSFULL on port: ', PORT)
});
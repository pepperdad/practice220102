const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://jeong20909:aa^^ehdud12!@boilerplate.zpmr1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
  .then(() => console.log('MongoDB Connected...'))
  .catch((e) => console.log('MongoDB error: ', e));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

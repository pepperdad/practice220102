const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { User } = require('./models/User.js');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// application/json
app.use(bodyParser.json());

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

// register를 위한 route
app.post('/register', (req, res) => {
  // 회원가입 할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

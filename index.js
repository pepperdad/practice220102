var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var methodOverride = require('method-override');

// DB setting
const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://jeong20909:aa^^ehdud12!@boilerplate.zpmr1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
  .then(() => console.log('MongoDB Connected...'))
  .catch((e) => console.log('MongoDB error: ', e));

// other setting
app.set('view engine', 'ejs'); // ejs를 사용하기 위해서 express의 view engine에 ejs를 set하는 코드입니다.
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Routes
app.use('/', require('./routes/home'));
app.use('/contacts', require('./routes/contacts'));

var port = 3000;
app.listen(port, () => {
  console.log('server on! http://localhost:' + port);
});

// const express = require('express');
// const app = express();
// const port = 3000;
// const bodyParser = require('body-parser');
// const { User } = require('./models/User.js');

// // application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// // application/json
// app.use(bodyParser.json());

// const mongoose = require('mongoose');

// mongoose
//   .connect(
//     'mongodb+srv://jeong20909:aa^^ehdud12!@boilerplate.zpmr1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//   )
//   .then(() => console.log('MongoDB Connected...'))
//   .catch((e) => console.log('MongoDB error: ', e));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // register를 위한 route
// app.post('/register', (req, res) => {
//   // 회원가입 할 때 필요한 정보들을 client에서 가져오면
//   // 그것들을 데이터베이스에 넣어준다.
//   const user = new User(req.body);

//   user.save((err, userInfo) => {
//     if (err) return res.json({ success: false, err });
//     return res.status(200).json({ success: true });
//   });
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

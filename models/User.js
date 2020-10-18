const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, // email 을 쳤을 때 a  b c@abc.com 이라면 ? 이 띄어 쓰기를 abc@abc.com 으로 만들어준다.
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    // 관리자가 될 수도 있고 일반 유저가 될 수도 있는데 관리자가 관리할 수 있도록
    type: Number, // 예를 들어 1이면 관리자이고 2이면 일반 유저로 정할수있음
    default: 0, // 지정하지않는다면 임의로 0을 준다
  },
  image: String,
  token: {
    // 토큰을 이용해서 나중에 유효성 같은걸 관리할 수 있음
    type: String,
  },
  tokenExp: {
    // 토큰이 사용 할 수 있는 기간을 주는 것
    type: Number,
  },
})

const User = mongoose.model('User', userSchema) // Schema 를 model 로 감싸준다

module.exports = { User }

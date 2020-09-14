const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 회원가입을 했을 때, 회원정보를 데이터베이스에 저장하도록 구현하세요.
    // res.end();
    users.findAll({
      // request****************
      where:
      {
        // auto : createdAt, id, updatedAt
        // 만들어야 할 것 : email, password, username
        email: req.body.email
      }
    }).then((result) => {
      // orm 형식으로 users테이블에 입력할 수 있도록 해준다.
      if (result.length === 0) {
        users.create({
          email: req.body.email,
          username: req.body.username,
          password: req.body.password

        }).then(data => {
          res.status(200).send(data); // data[0].values ??? === id값으로 recording을 찾기 때문에
        })
          // response**********************
          .then(data => {
            res.status(200).json(data);
          })
      }
      else {
        // test case에 존재하는 내용 
        res.status(409).send('Already exists user');
      }
    })
  }
};

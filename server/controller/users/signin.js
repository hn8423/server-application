const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 로그인을 했을 때, 회원정보를 데이터베이스에서 확인하고, 회원의 id를 session에 담아주도록 구현하세요.
    //데이터베이스에서 해당 유저의 회원정보 확인
    //회원아이디를 session의 담아서 확인
    const { email, password } = req.body;
    var sess = req.session;
    users.findOne({
      where: {
        email: email,
        password: password
      }

    }).then(result => {
      if (result === null) {
        res.status(404).send('unvalid user');
      } else {
        sess.userid = result.id // 찾은 유저 id 값을 session userid 값을 매핑 
        res.status(200).json(
          {
            id: result.id
          });
      } // data[0].values ??? === id값으로 recording을 찾기 때문에
    }).catch(err => {
      res.status(404).send(err);
    })
  }
};

const { users } = require('../../models');

module.exports = {
  // spritn mvc 활용, controller 사용
  get: async (req, res) => {
    // TODO : 유저의 session을 이용하여, 데이터베이스에 있는 정보를 제공하도록 구현하세요.
    // res.end();
    // id, 
    // if문으로 req.session를 해서 users의 signup에서 작성한 data를 불러온다.
    // should return user data with request of session.userid:
    // 401을 던져줌. ==> 'need user session'
    if (req.session.userid) {
      // findOne으로 해당되는 id recording을 가져온다.
      users.findOne({
        where: {
          id: req.session.userid
        }
      })
        .then(data => {
          res.status(200).send(data);
        })
    }
    else {
      res.status(401).send('need user session')
    }
    //  5) should return user data with request of session.userid가 통과 하지 않는 이유는 ?
    // signin이 아직 작성되지 않았기 때문? testcase 에서 signin post가 먼저오기 때문?
    // 200 이 response 되지 않음.
  }
};

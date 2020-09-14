'use strict';

const crypto = require('crypto');//암호화 해야함 

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      // 여기에 왜 빈 객체가 있을까...? 의심스럽게....
      // 어...? 3번줄에 crypto가 있넹? 개이득
      // hooks가 들어가야 한다.
      hooks: {
        afterValidate: (data, options) => {
          var shasum = crypto.createHash('sha1') // hash알고리즘
          // user정보중 암호화 해야하는것? password
          shasum.update(data.password) // 암호화할 대상
            .digest('hex'); //digest 인코딩방식
        }
      }
    }
  );
  users.associate = function (models) {
    // associations can be defined here
  };
  return users;
};

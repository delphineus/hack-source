'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(model.Resource);
        User.hasMany(model.like);
        User.hasMany(model.bookmark);
      }
    }
  });
  return User;
};
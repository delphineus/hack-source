'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Resource);
        User.hasMany(models.Like);
        User.hasMany(models.Bookmark);
      }
    }
  });
  return User;
};

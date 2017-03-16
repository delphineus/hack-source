'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    githubId: DataTypes.STRING,
    username: DataTypes.STRING,
    displayName: DataTypes.STRING,
    profileUrl: DataTypes.STRING,
    avatarUrl: DataTypes.STRING
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

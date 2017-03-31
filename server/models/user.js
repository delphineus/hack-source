'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    githubId: DataTypes.STRING,
    username: DataTypes.STRING,
    displayName: DataTypes.STRING,
    profileUrl: DataTypes.STRING,
    avatarUrl: DataTypes.STRING,
    accountRank: DataTypes.INTEGER
    // 0: User
    // 1: Moderator
    // 2: Admin
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

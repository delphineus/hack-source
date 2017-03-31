'use strict';
module.exports = function(sequelize, DataTypes) {
  var Resource = sequelize.define('Resource', {
    url: DataTypes.STRING,
    title: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    summary: DataTypes.TEXT,
    views: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Resource.belongsToMany(models.Tag, {through: models.ResourceTag});
        Resource.belongsToMany(models.Category, {through: models.ResourceCategory});
        Resource.hasMany(models.Like);
        Resource.hasMany(models.Dislike);
        Resource.hasMany(models.Bookmark);
        Resource.belongsTo(models.User);
      }
    }
  });
  return Resource;
};

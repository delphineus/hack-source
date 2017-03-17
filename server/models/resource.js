'use strict';
module.exports = function(sequelize, DataTypes) {
  var Resource = sequelize.define('Resource', {
    url: DataTypes.STRING,
    title: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    summary: DataTypes.TEXT,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // Resource.hasMany(models.Tag);
        // Resource.hasMany(models.Category);
        Resource.belongsToMany(models.Tag, {through: models.ResourceTag});
        Resource.belongsToMany(models.Category, {through: models.ResourceCategory});
        Resource.hasMany(models.Like);
        Resource.hasMany(models.Bookmark);
        Resource.belongsTo(models.User);
      }
    }
  });
  return Resource;
};

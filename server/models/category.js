'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    title: DataTypes.STRING,
    ResourceId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // Category.belongsTo(models.Resource);
        Category.belongsToMany(models.Resource, {through: models.ResourceCategory});
      }
    }
  });
  return Category;
};

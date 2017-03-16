'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    title: DataTypes.STRING,
    ResourceId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // Category.belongsTo(models.Resource);
      }
    }
  });
  return Category;
};

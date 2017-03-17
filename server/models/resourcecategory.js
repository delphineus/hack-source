'use strict';
module.exports = function(sequelize, DataTypes) {
  var ResourceCategory = sequelize.define('ResourceCategory', {
    ResourceId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return ResourceCategory;
};

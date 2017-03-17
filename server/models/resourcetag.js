'use strict';
module.exports = function(sequelize, DataTypes) {
  var ResourceTag = sequelize.define('ResourceTag', {
    ResourceId: DataTypes.INTEGER,
    TagId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return ResourceTag;
};

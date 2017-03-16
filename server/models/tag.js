'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define('Tag', {
    title: DataTypes.STRING,
    ResourceId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // Tag.belongsTo(models.Resource);
      }
    }
  });
  return Tag;
};

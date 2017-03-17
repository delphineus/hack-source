'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define('Tag', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // Tag.belongsTo(models.Resource);
        Tag.belongsToMany(models.Resource, {through: models.ResourceTag});
      }
    }
  });
  return Tag;
};

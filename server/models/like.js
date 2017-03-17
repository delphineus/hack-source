'use strict';
module.exports = function(sequelize, DataTypes) {
  var Like = sequelize.define('Like', {
    ResourceId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Like.belongsTo(models.Resource);
        Like.belongsTo(models.User);
      }
    }
  });
  return Like;
};

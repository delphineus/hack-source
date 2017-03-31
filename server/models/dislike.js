'use strict';
module.exports = function(sequelize, DataTypes) {
  var Dislike = sequelize.define('Dislike', {
    ResourceId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Dislike.belongsTo(models.Resource);
        Dislike.belongsTo(models.User);
        // associations can be defined here
      }
    }
  });
  return Dislike;
};

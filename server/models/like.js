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
    }, {
      // not sure if this is how I should do this
      setterMethods: {
        post: function(like) {
          this.setDataValue('ResourceId', value.resource);
          this.setDataValue('UserId', value.user);
        }
      }
    }
  });

  return Like;
};

'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bookmark = sequelize.define('Bookmark', {
    ResourceId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Bookmark;
};

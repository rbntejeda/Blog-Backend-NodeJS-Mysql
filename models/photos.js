/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('photos', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    albumId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'albums',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    thumbnailUrl: {
      type: DataTypes.STRING(512),
      allowNull: false
    }
  }, {
    tableName: 'photos'
  });
};

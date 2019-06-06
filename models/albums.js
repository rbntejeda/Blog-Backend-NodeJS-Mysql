/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('albums', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'albums'
  });
};

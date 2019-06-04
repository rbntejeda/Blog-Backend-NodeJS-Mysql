/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('todos', {
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
      type: DataTypes.TEXT,
      allowNull: false
    },
    completed: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'todos'
  });
};

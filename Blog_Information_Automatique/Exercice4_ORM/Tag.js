const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');
class Tag extends Model {}

Tag.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Tag',
  tableName: 'tag',
});

module.exports = Tag;

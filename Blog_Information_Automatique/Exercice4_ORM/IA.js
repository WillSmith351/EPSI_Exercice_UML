const { Model, DataTypes } = require('sequelize');
const sequelize = require('databases');

class IA extends Model {}

IA.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'IA',
  tableName: 'ia',
});

module.exports = IA;

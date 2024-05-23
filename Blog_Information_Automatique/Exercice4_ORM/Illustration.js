const { Model, DataTypes } = require('sequelize');
const sequelize = require('databases');
class Illustration extends Model {}

Illustration.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  article_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'article',
      key: 'id',
    },
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date_creation: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  ia_illustration_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'ia_illustration',
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Illustration',
  tableName: 'illustration',
});

module.exports = Illustration;

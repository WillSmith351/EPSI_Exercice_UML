const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class MiseEnLigne extends Model {}

MiseEnLigne.init({
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
  date_publie: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'MiseEnLigne',
  tableName: 'mise_en_ligne',
});

module.exports = MiseEnLigne;

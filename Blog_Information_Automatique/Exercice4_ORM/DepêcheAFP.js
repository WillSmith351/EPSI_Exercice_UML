const { Model, DataTypes } = require('sequelize');
const sequelize = require('databases');
class DepêcheAFP extends Model {}

DepêcheAFP.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contenu: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date_creation: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  source: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'DepêcheAFP',
  tableName: 'depeche_afp',
});

module.exports = DepêcheAFP;

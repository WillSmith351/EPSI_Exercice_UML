const { Model, DataTypes } = require('sequelize');
const sequelize = require('databases');

class IAIllustration extends Model {}

IAIllustration.init({
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
  taille: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type_image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'IAIllustration',
  tableName: 'ia_illustration',
});

module.exports = IAIllustration;

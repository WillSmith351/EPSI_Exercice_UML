const { Model, DataTypes } = require('sequelize');
const sequelize = require('databases');
class Article extends Model {}

Article.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  afp_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'depeche_afp',
      key: 'id',
    },
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
  statut: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ia_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'ia',
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Article',
  tableName: 'article',
});

module.exports = Article;

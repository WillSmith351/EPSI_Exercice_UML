const sequelize = require('database');

const DepêcheAFP = require('./DepêcheAFP');
const Article = require('./Article');
const IA = require('./IA');
const IAIllustration = require('./IAIllustration');
const Tag = require('./Tag');
const MiseEnLigne = require('./MiseEnLigne');
const Illustration = require('./Illustration');

DepêcheAFP.hasMany(Article, { foreignKey: 'afp_id' });
Article.belongsTo(DepêcheAFP, { foreignKey: 'afp_id' });

IA.hasMany(Article, { foreignKey: 'ia_id' });
Article.belongsTo(IA, { foreignKey: 'ia_id' });

IA.hasMany(IAIllustration, { foreignKey: 'ia_id' });
IAIllustration.belongsTo(IA, { foreignKey: 'ia_id' });

Article.hasMany(MiseEnLigne, { foreignKey: 'article_id' });
MiseEnLigne.belongsTo(Article, { foreignKey: 'article_id' });

Article.hasMany(Illustration, { foreignKey: 'article_id' });
Illustration.belongsTo(Article, { foreignKey: 'article_id' });

IAIllustration.hasMany(Illustration, { foreignKey: 'ia_illustration_id' });
Illustration.belongsTo(IAIllustration, { foreignKey: 'ia_illustration_id' });

Article.belongsToMany(Tag, { through: ArticleTag, foreignKey: 'article_id' });
Tag.belongsToMany(Article, { through: ArticleTag, foreignKey: 'tag_id' });

module.exports = {
  DepêcheAFP,
  Article,
  IA,
  IAIllustration,
  Tag,
  MiseEnLigne,
  Illustration,
  sequelize,
};

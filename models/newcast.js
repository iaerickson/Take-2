module.exports = function(sequelize, DataTypes) {
  var NewCast = sequelize.define('NewCast', {
    movie: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user: {
      type: DataTypes.STRING
    },
    actorRole1: {
      type: DataTypes.STRING
    },
    actorRole2: {
      type: DataTypes.STRING
    },
    actorRole3: {
      type: DataTypes.STRING
    },
    actorRole4: {
      type: DataTypes.STRING
    },
    thumbs_up: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    }
  });

  return NewCast;
};

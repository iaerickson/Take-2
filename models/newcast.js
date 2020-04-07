module.exports = function (sequelize, DataTypes) {
  var NewCast = sequelize.define('NewCast', {
    movie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING,
    },
    actorForRole1: {
      type: DataTypes.STRING,
    },
    actorForRole2: {
      type: DataTypes.STRING,
    },
    actorForRole3: {
      type: DataTypes.STRING,
    },
    actorForRole4: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    thumbsUp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
  });

  return NewCast;
};

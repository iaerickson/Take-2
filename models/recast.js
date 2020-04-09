module.exports = function (sequelize, DataTypes) {
  var Recast = sequelize.define('Recast', {
    movie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING,
    },
<<<<<<< HEAD:models/recast.js
    role1: {
      type: DataTypes.STRING,
    },
    role2: {
      type: DataTypes.STRING,
    },
    role3: {
      type: DataTypes.STRING,
    },
    role4: {
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
=======
    actorForRole1: {
      type: DataTypes.STRING,
    },
    actorForRole2: {
      type: DataTypes.STRING,
    },
    actorForRole3: {
      type: DataTypes.STRING,
    },
>>>>>>> master:models/newcast.js
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

  return Recast;
};

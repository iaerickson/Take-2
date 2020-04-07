module.exports = function (sequelize, DataTypes) {
  var Movie = sequelize.define('Movie', {
    title: {
      type: DataTypes.STRING,
    },
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
    actor1: {
      type: DataTypes.STRING,
    },
    actor2: {
      type: DataTypes.STRING,
    },
    actor3: {
      type: DataTypes.STRING,
    },
    actor4: {
      type: DataTypes.STRING,
    },
  });

  return Movie;
};

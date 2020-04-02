//Actor Model for our list of database of actors to pick and choose from
//Actor model/table may grow as we decide how we want to pick and sort more actors

module.exports = function(sequelize, DataTypes) {
  var Actor = sequelize.define('Actor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthdate: {
      type: DataTypes.DATE
    }
  });
  return Actor;
};

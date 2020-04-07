//Actor Model for our list of database of actors to pick and choose from
//Actor model/table may grow as we decide how we want to pick and sort more actors

module.exports = function (sequelize, DataTypes) {
  var Actor = sequelize.define('Actor', {
    position: {
      type: DataTypes.INTEGER,
    },
    const: {
      type: DataTypes.STRING,
    },
    created: {
      type: DataTypes.DATE,
    },
    modified: {
      type: DataTypes.DATE,
    },
    description: {
      type: DataTypes.TEXT,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    knownFor: {
      type: DataTypes.STRING,
    },
    birthdate: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: 'DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3)',
    },
    updatedAt: {
      type:
        'DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)',
    },
  });
  return Actor;
};

//things to maybe add:
//use count to track actor's popularity amongst users
//

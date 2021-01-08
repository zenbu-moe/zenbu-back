const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('info', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    passwd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    verified: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    donatorLevel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    activities: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "''"
    },
    profileLayout: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "'placeholder'"
    },
    colorAccent: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "'placeholder'"
    },
    registerDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'info',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

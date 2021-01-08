var DataTypes = require("sequelize").DataTypes;
var _info = require("./info");

function initModels(sequelize) {
  var info = _info(sequelize, DataTypes);


  return {
    info,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

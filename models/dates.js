'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dates: extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Dates .init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    typeOfDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dates',
  });
  return Dates ;
};
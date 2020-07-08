"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Date extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Date.belongsTo(models.User, {
        foreignKey: {
          allowNull: true
        }
      });
    }
  }
  Date.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      typeOfDate: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Date"
    }
  );
  return Date;
};

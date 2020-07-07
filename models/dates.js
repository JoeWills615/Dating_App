"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
      Dates.belongsTo(models.User, {
        foreignKey: {
          allowNull: true,
        }
      });
    }
  }
  Dates.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      typeOfDate: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Dates"
    }
  );
  return Dates;
};

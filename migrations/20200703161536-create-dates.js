"use strict";
module.exports = async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Dates:s", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    typeOfDate: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
};
module.exports = async function down(queryInterface) {
  await queryInterface.dropTable("Dates:s");
};

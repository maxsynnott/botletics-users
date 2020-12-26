"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		queryInterface.bulkInsert("Users", [
			{
				email: "alice@example.com",
				chess_endpoint: "http://localhost:10000",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				email: "bob@example.com",
				chess_endpoint: "http://localhost:10001",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		queryInterface.bulkDelete("Users", null);
	},
};

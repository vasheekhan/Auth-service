'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Roles', [{
        name: 'ADMIN',
        createdAt:new Date(),
        updatedAt:new Date(),
      },{
name:"CUSTOMER",
createdAt:new Date(),
updatedAt:new Date(),

      },{
name:"AIRLINE_BUISNESS",
createdAt:new Date(),
updatedAt:new Date(),
      }
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

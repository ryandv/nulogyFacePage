/**
 * Employee.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs                :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  identity: "employee",

  attributes: {
    lastName: "string",
    firstName: "string",
    department: "string",
    email: "string",
    nulogyBirthday: "datetime",
    displayPicturePath: "string",

    workedOn: {
      collection: "project",
      via: "contributors",
      dominant: true
    }

  }

};

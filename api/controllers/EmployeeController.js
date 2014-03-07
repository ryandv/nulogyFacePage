/**
 * EmployeeController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  filter: function(req, res) {
    Employee.find().where({ workedOn: { contains: req.param("project") } }).then(function(employees) {
      res.json(employees);
    });
  }

};

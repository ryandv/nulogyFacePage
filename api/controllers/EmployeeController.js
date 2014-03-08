/**
 * EmployeeController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  filter: function(req, res) {
    employee.find().populate("workedOn").then(function(results) {
      var projects = typeof req.param("project") === "string" ? [req.param("project")] : req.param("project");
      var foo = _.filter(results, function(anEmployee) {
        console.log(anEmployee.workedOn[0]);
        return _.some(projects, function(aProject) {
          console.log("    " + aProject);
          return _.contains(_.map(anEmployee.workedOn, function(project) { return project.name; }), aProject);
        });
      });
      res.json(foo);
    });
  }

};

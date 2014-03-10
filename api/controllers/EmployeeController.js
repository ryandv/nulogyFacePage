/**
 * EmployeeController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  find: function(req, res) {
    console.log("foobar");
    employee.find().populate("workedOn").populate("workedFor").then(function(results) {
      var response = _.map(results, function(employee) {
        employee.tags = [];
        _.map(employee.workedOn.concat(employee.workedFor), function(relation) {
          employee.tags.push(relation.name);
        });
        return employee;
      });
      //var foo = _.filter(results, function(anEmployee) {
      //  return _.some(tags, function(tag) {
      //    return _.contains(_.map(anEmployee.workedOn.concat(anEmployee.workedFor), function(relation) { return relation.name; }), tag);
      //  });
      //});
      res.json(response);
    });
  }

};

/**
 * EmployeeController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  filter: function(req, res) {
    employee.find().populate("workedOn").populate("workedFor").then(function(results) {
      var tags = typeof req.param("tag") === "string" ? [req.param("tag")] : req.param("tag");
      var foo = _.filter(results, function(anEmployee) {
        return _.some(tags, function(tag) {
          return _.contains(_.map(anEmployee.workedOn.concat(anEmployee.workedFor), function(relation) { return relation.name; }), tag);
        });
      });
      res.json(foo);
    });
  }

};

const Course = require("./Course");
const Professor = require("./Professor");
const Student = require("./Student");

Student.belongsToMany(Professor, { through: "StudentsProfessors" });
Professor.belongsToMany(Student, { through: "StudentsProfessors" });

Student.belongsToMany(Course, { through: "StudentsCourses"});
Course.belongsToMany(Student, { through: "StudentsCourses"});


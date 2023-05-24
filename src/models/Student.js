const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Student = sequelize.define('student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    program: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Student;
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Professor = sequelize.define('professor', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Professor;
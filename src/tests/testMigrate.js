const sequelize = require('../utils/connection');
require('../models/Student');
require('../models/Professor');
require('../models/Course');
require('../models');

const main = async() => {
    try{
        await sequelize.sync({ force: true });
        
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();

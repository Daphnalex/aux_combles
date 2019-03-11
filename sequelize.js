const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const RealisationModel = require('./models/realisation');
const sequelize = new Sequelize('aux_combles','root','AZERTY', {
    dialect: 'mysql',
    host: 'localhost',
    
});

//test if database connection has been established
sequelize
    .authenticate()
    .then(()=> {
        console.log('Connection has been established successfully');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//
const User = UserModel(sequelize, Sequelize);
const Realisation = RealisationModel(sequelize, Sequelize);
Realisation.belongsTo(User);

sequelize.sync()
    .then(()=> {
        //console.log('Database & tables created!')
    });

sequelize.getQueryInterface().showAllSchemas().then((tableObj) => {
        //console.log('// Tables in database','==========================');
        //console.log(tableObj);
    })
    .catch((err) => {
        //console.log('showAllSchemas ERROR',err);
    })

module.exports = {
    User,
    Realisation
}
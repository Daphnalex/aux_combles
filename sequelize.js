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
//initialization of user for testing  
const user  = User.build({
    //initialization of user for testing 
    username: "admin",
    email: "test",
    password: '$2a$10$zk7CoE3uHTqUZCxgsFP2vufa/PRPXfAE876kvnEE/GGg05B5CCpwG',
    isAdmin: true
});
user.save().then((user) => {
    console.log("user create",user);
}).catch((error) => {
    console.log('user non créé',error)
})

sequelize.sync()
    .then(()=> {
        //console.log('Database & tables created!')
    });

sequelize.getQueryInterface().showAllSchemas().then((tableObj) => {
        //console.log('// Tables in database','==========================');
        console.log(tableObj);
    })
    .catch((err) => {
        //console.log('showAllSchemas ERROR',err);
    })

module.exports = {
    User,
    Realisation
}


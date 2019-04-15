module.exports = (sequelize, type) => {
    console.log('sequelize',sequelize);
    var Realisation = sequelize.define('Realisation', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            allowNull: false,
            type: type.STRING
        },
        description: {
            allowNull: false,
            type: type.TEXT
        },
        dateOfRealisation: {
            allowNull: true,
            type: type.DATE
        },
        mainPicture: {
            allowNull: false,
            type: type.JSON
        },
        pictures: {
            allowNull: true,
            type: type.JSON
        }
    });
    
    return Realisation;
}

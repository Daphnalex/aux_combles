module.exports = (sequelize, type) => {
    var Realisation = sequelize.define('realisation', {
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
            allowNull: true,
            type: type.JSON
        }
        //customer review
        /*customerReview: {
            allowNull: true,
            type: type.STRING
        }*/
    });
    return Realisation;
}
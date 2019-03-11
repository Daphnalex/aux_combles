module.exports = (sequelize, type) => {
    var User = sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            allowNull: false,
            type: type.STRING
        },
        email: {
            allowNull: false,
            type: type.STRING
        },
        password: {
            allowNull: false,
            type: type.STRING
        },
        isAdmin: {
            allowNull: false,
            type: type.TINYINT
        },
        createdAt: {
            defaultValue: new Date(),
            type: type.DATE
        },
        updatedAt: {
            defaultValue: new Date(),
            type: type.DATE
        }
    });
    return User;
}
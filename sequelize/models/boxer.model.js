const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Boxers', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        firstName: {
            field: 'firstName',
            type: DataTypes.STRING,
        },
        lastName: {
            field: 'lastName',
            type: DataTypes.STRING,
        },
        dateOfBirth: {
            field: 'dateOfBirth',
            type: DataTypes.STRING,
        },
        weightClassId: {
            field: 'weight_id',
            type: DataTypes.INTEGER,
        },
        thumbnailUrl: {
            field: 'thumbnailUrl',
            type: DataTypes.STRING,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })
}
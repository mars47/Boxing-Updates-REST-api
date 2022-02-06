const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Organization', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        shortName: {
            field: 'shortName',
            type: DataTypes.STRING,
        },
        fullName: {
            field: 'fullName',
            type: DataTypes.STRING,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })

}
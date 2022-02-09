const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Country', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        isoCode: {
            field: 'isoCode',
            type: DataTypes.STRING,
        },
        name: {
            field: 'name',
            type: DataTypes.STRING,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })

}
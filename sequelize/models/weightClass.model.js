const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('WeightClass', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        weight: {
            field: 'weight',
            type: DataTypes.STRING,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })
}
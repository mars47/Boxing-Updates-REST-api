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
        },
        lb: {
            field: 'lb',
            type: DataTypes.INTEGER,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })
}
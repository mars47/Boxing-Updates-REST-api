const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Events', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title: {
            field: 'title',
            type: DataTypes.STRING,
        },
        date: {
            field: 'date',
            type: DataTypes.STRING,
        },
        venue: {
            field: 'venue',
            type: DataTypes.STRING,
        },
        countryId: {
            field: 'country_id',
            type: DataTypes.INTEGER,
        },
        weightClassId: {
            field: 'weight_id',
            type: DataTypes.INTEGER,
        },
        mainEventId: {
            field: 'mainEvent_id',
            type: DataTypes.INTEGER,
        },
        boxer1Id: {
            field: 'boxer1_id',
            type: DataTypes.INTEGER,
        },
        boxer2Id: {
            field: 'boxer2_id',
            type: DataTypes.INTEGER,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })

}
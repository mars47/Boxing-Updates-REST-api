const { DataTypes } = require('sequelize');

module.exports = (sequelize) => { 

    sequelize.define('Belts', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
        }, 
        name: {
            field: 'name',
            type: DataTypes.STRING,
        }, 
        organizationId: {
            field: 'organization_id',
            type: DataTypes.INTEGER,
            primaryKey: true
        }, 
        weightClassId: {
            field: 'weightClass_id',
            type: DataTypes.INTEGER,
            primaryKey: true
        }, 
        boxerId: {
            field: 'boxer_id',
            type: DataTypes.INTEGER,
        },
        acquiredDate: {
            field: 'acquiredDate',
            type: DataTypes.STRING,
        }
    }, {
            timestamps: false
    })
}
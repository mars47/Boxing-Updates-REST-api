const { DataTypes } = require('sequelize');

module.exports = (sequelize) => { 

   var belts = sequelize.define('Belts', {
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
        acquiredDate: {
            field: 'acquiredDate',
            type: DataTypes.STRING,
        }
    },
    {
            timestamps: false
    })

    belts.associate = (models) => {
        belts.belongsTo(models.Boxers, {foreignKey: 'boxer_id'});
    };

    return belts
}
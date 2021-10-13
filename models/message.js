const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Message', {
        pseudo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        score: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        // Other model options go here
    });
}

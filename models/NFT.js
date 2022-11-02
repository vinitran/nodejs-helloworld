const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const NFT = sequelize.define('NFT', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING(100),
        primaryKey: false,
        allowNull: false,
        unique: false
    },
    description: {
        type: DataTypes.STRING(100),
        primaryKey: false,
        allowNull: false,
        unique: false
    },
    imageURL: {
        type: DataTypes.STRING(100),
        primaryKey: false,
        allowNull: false,
        unique: true
    },
}, {
    tableName: "info",
});

module.exports = NFT;

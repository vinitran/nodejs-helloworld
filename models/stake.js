const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Stake = sequelize.define('Staking', {
    address: {
        type: DataTypes.STRING(100),
        primaryKey: true,
        autoIncrement: false,
        unique: true
    },
    amount: {
        type: DataTypes.BIGINT,
        primaryKey: false,
        allowNull: false,
        unique: false
    },
},
    {
        tableName: "StakeInfo",
    }
);

module.exports = NFT;

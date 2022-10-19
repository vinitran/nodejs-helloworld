const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const users = sequelize.define('user', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: false,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(100),
        primaryKey: false,
        allowNull: false,
    }
}, {
    tableName: "users",
    timestamps: true
});

module.exports = users;

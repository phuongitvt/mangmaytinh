const { DataTypes } = require('sequelize');
const getPriceHistory = require('./database_models/PriceHistory');

class PriceHistory {
    constructor(connection) {
        this.model = getPriceHistory(connection, DataTypes);
    }

    get() {
        return this.model.findAll();
    }

    insert(data) {
        return this.model.create(data);
    }
}

module.exports = PriceHistory;

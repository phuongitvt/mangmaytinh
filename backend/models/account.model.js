const { DataTypes } = require('sequelize');
const getAccount = require('./database_models/Account');

class AccountModel {
    constructor(connection) {
        this.model = getAccount(connection, DataTypes);
    }

    getAccounts() {
        return this.model.findAll();
    }

    async login(username, password) {
       const exist = await this.model.count({
           where: { username, password }
       });

       return exist ? true : false;
    }
}

module.exports = AccountModel;

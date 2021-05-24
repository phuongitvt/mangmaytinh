module.exports = function(sequelize, DataTypes) {
    const Account = sequelize.define(
        'Account',
        {
            username: {
                primaryKey: true,
                type: DataTypes.STRING,
                field: 'username',
            },
            password: {
                type: DataTypes.STRING,
                field: 'password',
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                field: 'name',
            },
        },
        {
            tableName: 'Account',
            timestamps: false,
        },
    );

    return Account;
};

module.exports = function(sequelize, DataTypes) {
    const PriceHistory = sequelize.define(
        'PriceHistory',
        {
            getTime: {
                primaryKey: true,
                type: DataTypes.STRING,
                field: 'get_time',
            },
            usd: {
                type: DataTypes.FLOAT,
                field: 'usd',
                allowNull: false,
            },
            gbp: {
                type: DataTypes.FLOAT,
                field: 'gbp',
                allowNull: false,
            },
            eur: {
                type: DataTypes.FLOAT,
                field: 'eur',
                allowNull: false,
            },
        },
        {
            tableName: 'PriceHistory',
            timestamps: false,
        },
    );

    return PriceHistory;
};

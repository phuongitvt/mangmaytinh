const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const compression = require('compression');
const axios = require('axios');
const cors = require('cors')
const moment = require('moment');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(config.get('database'));
const app = express();

app.use(
    cors(),
    compression(),
    bodyParser.urlencoded({ limit: '50mb', extended: true }),
    bodyParser.json({ limit: '50mb' }),
);

app.all('/', (req, res) => {
    res.send('API');
});

sequelize.authenticate().then(() => {
    console.log('Connect database success');

    const AccountModel = require('./models/account.model');
    const accountModel = new AccountModel(sequelize);

    const PriceHistoryModel = require('./models/price_history.model');
    const priceHistoryModel = new PriceHistoryModel(sequelize);

    app.post('/login', async (req, res) => {
        const { username, password } = req.body.body;
        if (!username || !password) {
            return res.status(400).json({
                'message': 'Invalid data',
            });
        }

        try {
            const result = await accountModel.login(username, password);
            if (result) {
                res.status(200).json({
                    'message': 'Success',
                });
            } else {
                res.status(404).json({
                    'message': 'Not found',
                });
            }
        } catch (err) {
            res.status(400).json(err);
        }
    });

    app.all('/account', async (req, res) => {
        try {
            const data = await accountModel.getAccounts();
            res.json(data).status(200);
        } catch (err) {
            res.json(err).status(400);
        }
    });

    app.get('/bitcoin/get', async (req, res) => {
        const data = await priceHistoryModel.get();
        res.json(data).status(200);
    });

    app.get('/bitcoin/update', async (req, res) => {
        const response = await axios.get(config.get('api'));
        const prices = response.data.bpi;
        const data = {
            getTime: moment().format('YYYY-MM-DD HH:mm:ss.SSS'),
            usd: prices.USD.rate_float,
            gbp: prices.GBP.rate_float,
            eur: prices.EUR.rate_float,
        }

        await priceHistoryModel.insert(data);
        res.json(response.data.bpi).status(200);
    });

    const server = app.listen(config.get('port'), () => {
        const { address, port } = server.address();
        console.log('App listening at http://%s:%s...', address, port);
    });
}).catch(console.error);


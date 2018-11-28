((dbConnector) => {
    'use strict';
    const MongoClient = require('mongodb').MongoClient;
    const dbconfig = require('../configs/app.config');

    dbConnector.init = async(app) =>{
        let options = {useNewUrlParser: true };
        const dbConnection = await MongoClient.connect(dbconfig.url,options);
        app.locals.db = dbConnection;
        console.log('connection success....', app.locals.db)
    }
})(module.exports);
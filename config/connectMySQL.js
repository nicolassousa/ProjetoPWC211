const mysql = require('mysql');
module.exports = {
    con: mysql.createConnection({
        host: 'remotemysql.com',
        user: 'pkfFqmJ7Jh',
        password: '4h2BW0D6l9',
        database: 'pkfFqmJ7Jh'
    })
};
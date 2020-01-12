const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "bd");
const crypto = require("crypto");
const connect = require('../config/connectMySQL');

function read(req, res) {
    const query = connect.con.query('SELECT * FROM utilizador', function(err, rows, fields) {
        console.log(query.sql);
        if (err) {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        } else {
            if (rows.length == 0) {
                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
            } else {
                res.send(rows);
            }
        }
    });
}

function readID(req, res) {
    const id_user = req.sanitize('id').escape();
    get = {
        id_user: id_user
    };
    const query = connect.con.query('SELECT * FROM utilizador WHERE ?', get, function(err, rows, fields) {
        console.log(query.sql);
        if (err) {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        } else {
            if (rows.length == 0) {
                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
            } else {
                res.send(rows);
            }
        }
    });
}

function readNifID(req, res) {
    const id_user = req.sanitize('id').escape();
    get = {
        id_user: id_user
    };
    const query = connect.con.query('SELECT nif FROM utilizador where ?', get, function (err, rows, fields) {
        console.log(query.sql);
        if (err) {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        } else {
            if (rows.length == 0) {
                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
            } else {
                let nif = rows[0].nif;
                const mykey = crypto.createDecipher('aes-128-cbc', '123');
                nif = mykey.update(nif, 'hex', 'utf8')
                nif += mykey.final('utf8');
                console.log(nif);
                const msg = { "nif_decrypted": nif }
                res.send(msg);
            }
        }
    });
}

function block(req, res) {
    const update = [1, req.sanitize('id').escape()];
    const query = connect.con.query('UPDATE utilizador SET banido = ? WHERE id_user = ?', update, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(jsonMessages.db.successDelete.status).send(jsonMessages.db.successDelete);
        } else {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
    });
}

function desblock(req, res) {
    const update = [0, req.sanitize('id').escape()];
    const query = connect.con.query('UPDATE utilizador SET banido = ? WHERE id_user = ?', update, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(jsonMessages.db.successDelete.status).send(jsonMessages.db.successDelete);
        } else {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
    });
}

function deleteF(req, res) {
    const update = req.sanitize('id').escape();
    const query = connect.con.query('DELETE FROM utilizador WHERE id_user=?', update, function(err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(jsonMessages.db.successDeleteU.status).send(jsonMessages.db.successDeleteU);
        } else {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
    });
}




module.exports = {
    read: read,
    readID: readID,
    readNifID: readNifID,
    block: block,
    desblock: desblock,
    deleteF: deleteF
}
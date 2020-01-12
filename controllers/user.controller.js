const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "bd");
const crypto = require("crypto");
const nodemailer = require('nodemailer');
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
    const id = req.sanitize('id').escape();
    const update = [1, id];
    const query = connect.con.query('UPDATE utilizador SET banido = ? WHERE id_user = ?', update, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            sendBlock(true, id)
            res.status(jsonMessages.db.successDelete.status).send(jsonMessages.db.successDelete);
        } else {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
    });
}

function desblock(req, res) {
    const id = req.sanitize('id').escape();
    const update = [0, id];
    const query = connect.con.query('UPDATE utilizador SET banido = ? WHERE id_user = ?', update, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            sendBlock(false, id);
            res.status(jsonMessages.db.successDelete.status).send(jsonMessages.db.successDelete);
        } else {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
    });
}

function sendBlock(resultado, id) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'pressplay1920@gmail.com',
            pass: 'passe12345nova'
        }
    });
    var pedido;
    get = { id_user: id };
    const query = connect.con.query('SELECT * FROM utilizador WHERE ?', get, function (err, rows, fields) {
        console.log(query.sql);
        if (err) {
            console.log(err);
        } else {
            if (rows.length == 0) {
                console.log(jsonMessages.db.noRecords);
            } else {
                pedido = rows[0];
                var data = new Date();
                var hora = data.getHours();
                var parteDoDia = "NULL";
                var mensagemResultado = "NULL";
                var subjectResultado = "NULL";

                if (hora >= 6 && hora <= 11) {
                    parteDoDia = "Bom dia, " + pedido.primeiro_nome + ".";
                }
                if (hora >= 12 && hora <= 19) {
                    parteDoDia = "Boa Tarde, " + pedido.primeiro_nome + ".";
                }
                if (hora >= 20 && hora <= 23 || (hora >= 0 && hora <= 5)) {
                    parteDoDia = "Boa Noite, " + pedido.primeiro_nome + ".";
                }
                if (resultado) {
                    var mensagemResultado = "Informamos que você acabou de ser bloqueado pela nossa empresa. \nSe você não sabe a razão pela qual foi bloqueado por favor contacte a nossa empresa através do email pressplay1920@gmail.com";
                    subjectResultado = "Aceite";
                } else {
                    var mensagemResultado = "Informamos que você acabou de ser desbloqueado pela nossa empresa. \nEstamos felizes por tê-lo de volta e pedimos desculpa por qualquer incómodo.";
                    subjectResultado = "Recusado";
                }

                mensagemResultado += "\n\nDetalhes da Empresa: "
                mensagemResultado += "\nId: " + id;
                mensagemResultado += "\nNome Empresa: " + pedido.primeiro_nome;
                mensagemResultado += "\Localidade: " + pedido.localidade;
                mensagemResultado += "\n Se estas informações não correspondem à sua empresa por favor contacte a nossa empresa através do email pressplay1920@gmail.com"
                var text = parteDoDia + mensagemResultado;

                var mailOptions = {
                    from: 'pressplay1920@gmail.com', // sender address
                    to: pedido.Email, // list of receivers
                    subject: ' Bloqueio Press&Play ' + subjectResultado, // Subject line
                    text: text
                    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                        res.json({ yo: 'error' });
                    } else {
                        console.log('Message sent: ' + info.response);
                        res.json({ yo: info.response });
                    };
                });

            }
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
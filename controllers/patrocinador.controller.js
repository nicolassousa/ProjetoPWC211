const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "bd");
const connect = require('../config/connectMySQL');
const nodemailer = require('nodemailer');
const twitterController = require('./twitter.controller.js');

function read(req, res) {
    const query = connect.con.query('SELECT * FROM Patrocinador', function (err, rows, fields) {
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
    const idPatrocinador = req.sanitize('id').escape();
    get = { idPatrocinador: idPatrocinador };
    const query = connect.con.query('SELECT * FROM Patrocinador WHERE ?', get, function (err, rows, fields) {
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

function save(req, res) {
    const Nome_Empresa = req.sanitize('Nome_Empresa').escape();
    const Logotipo = req.sanitize('Logotipo').escape();
    const Email = req.sanitize('Email').escape();
    const Localizacao = req.sanitize('Localizacao').escape();
    const Contacto = req.body.Contacto;
    const Valor = req.body.Valor;
    req.checkBody("Nome_Empresa", "Nome da empresa não é válido").matches(/^[a-zA-Z\sа-яА-Яêãõêãâá\'ã\,â\-]+$/g);
    req.checkBody("Nome_Empresa", "Nome da empresa é obrigatório").notEmpty();
    req.checkBody('Logotipo', 'Logótipo é obrigatório').notEmpty();
    req.checkBody('Localizacao', 'Localização não é válida').matches(/^[a-zA-Z\sа-яА-Яêãõêãâá\'ã\,â]+$/g);
    req.checkBody('Localizacao', 'Localização é obrigatória').notEmpty();
    req.checkBody('Email', 'Email não é válido').isEmail();
    req.checkBody('Email', 'Email é obrigatório').notEmpty();
    req.checkBody('Contacto', 'Contacto inválido').isNumeric();
    req.checkBody('Valor', 'Valor inválido').isNumeric();
    const errors = req.validationErrors();
    if (errors) {
        console.log(errors);
        return;
    } else {
        if (Nome_Empresa != "NULL" && Email != "NULL") {
            const post = {
                Nome_Empresa: Nome_Empresa,
                Logotipo: Logotipo,
                Email: Email,
                Contacto: Contacto,
                Localizacao: Localizacao,
                Valor: Valor
            };
            const query = connect.con.query('INSERT INTO Patrocinador SET ?', post, function (err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    res.status(jsonMessages.db.successInsert.status).location(rows.insertId).send(jsonMessages.db.successInsert);
                } else {
                    console.log(err);
                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                }
            });
        } else
            res.status(jsonMessages.db.requiredData.status).end(jsonMessages.db.requiredData);
    }

}

function update(req, res) {
    const idPatrocinador = req.sanitize('id').escape();
    const Nome_Empresa = req.sanitize('Nome_Empresa').escape();
    //const Logotipo = req.sanitize('Logotipo').escape();
    const Email = req.sanitize('Email').escape();
    const Localizacao = req.sanitize('Localizacao').escape();
    const Contacto = req.body.Contacto;
    const Valor = req.body.Valor;
    req.checkBody("Nome_Empresa", "Nome da empresa não é válido").matches(/^[a-zA-Z\sа-яА-Яêãõêãâá\'ã\,â\-]+$/g);
    req.checkBody("Nome_Empresa", "Nome da empresa é obrigatório").notEmpty();
    //req.checkBody('Logotipo', 'Logótipo é obrigatório').notEmpty();
    req.checkBody('Localizacao', 'Localização não é válida').matches(/^[a-zA-Z\sа-яА-Яêãõêãâá\'ã\,â]+$/g);
    req.checkBody('Localizacao', 'Localização é obrigatória').notEmpty();
    req.checkBody('Email', 'Email não é válido').isEmail();
    req.checkBody('Email', 'Email é obrigatório').notEmpty();
    req.checkBody('Contacto', 'Contacto inválido').isNumeric();
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    } else {
        if (Nome_Empresa != "NULL" && Email != "NULL") {
            //const update = [Nome_Empresa, Email, Contacto, Logotipo, Localizacao, Valor, idPatrocinador];
            const update = [Nome_Empresa, Email, Contacto, Localizacao, Valor, idPatrocinador];
            //const query = connect.con.query('UPDATE Patrocinador SET Nome_Empresa = ?, Email = ? , Contacto = ? , Logotipo = ? , Localizacao = ?, Valor =?  WHERE idPatrocinador = ?', update, function (err, rows, fields) {
            const query = connect.con.query('UPDATE Patrocinador SET Nome_Empresa = ?, Email = ? , Contacto = ?, Localizacao = ?, Valor =?  WHERE idPatrocinador = ?', update, function (err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    console.log("entrei aqui");
                    res.status(200).send(jsonMessages.db.successUpdate);
                } else {
                    console.log("entrei no erro");
                    console.log(err);
                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                }
            });
        } else
            res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
}

function block(req, res) {
    const idPatrocinador = req.sanitize('id').escape();
    const update = [1, idPatrocinador];
    const query = connect.con.query('UPDATE Patrocinador SET bloqueado = ? WHERE idPatrocinador = ?', update, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(jsonMessages.db.successDelete.status).send(jsonMessages.db.successDelete);
            sendBlock(true, idPatrocinador);
        } else {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
    });
}

function desblock(req, res) {
    const idPatrocinador = req.sanitize('id').escape();
    const update = [0, idPatrocinador];
    const query = connect.con.query('UPDATE Patrocinador SET bloqueado = ? WHERE idPatrocinador = ?', update, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(jsonMessages.db.successDelete.status).send(jsonMessages.db.successDelete);
            sendBlock(false, idPatrocinador);
        } else {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
    });
}

function deleteL(req, res) {
    const update = [0, req.sanitize('id').escape()];
    const query = connect.con.query('UPDATE Patrocinador SET Ativo = ? WHERE idPatrocinador = ?', update, function (err, rows, fields) {
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
    const query = connect.con.query('DELETE FROM Patrocinador WHERE idPatrocinador = ?', update, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(jsonMessages.db.successDeleteU.status).send(jsonMessages.db.successDeleteU);
        } else {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
    });
}

function accept(req, res) {
    const idPatrocinador = req.sanitize('id').escape();
    const update = [idPatrocinador];
    const query = connect.con.query('UPDATE Patrocinador SET Resultado = 1, Ativo = 1, dataResultado = CURRENT_TIMESTAMP  WHERE idPatrocinador = ?', update, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(jsonMessages.db.successUpdate.status).send(jsonMessages.db.successUpdate);
            sendResult(true, idPatrocinador);
        } else {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
    });
}

function deny(req, res) {
    const idPatrocinador = req.sanitize('id').escape();
    const update = [idPatrocinador];
    const query = connect.con.query('UPDATE Patrocinador SET Resultado = -1, Ativo = 1, dataResultado = CURRENT_TIMESTAMP  WHERE idPatrocinador = ?', update, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(jsonMessages.db.successUpdate.status).send(jsonMessages.db.successUpdate);
            sendResult(false, idPatrocinador);
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
    get = { idPatrocinador: id };
    const query = connect.con.query('SELECT * FROM Patrocinador WHERE ?', get, function (err, rows, fields) {
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

                if (hora >= 6 && hora <= 11) {
                    parteDoDia = "Bom dia, " + pedido.Nome_Empresa + ".";
                }
                if (hora >= 12 && hora <= 19) {
                    parteDoDia = "Boa Tarde, " + pedido.Nome_Empresa + ".";
                }
                if (hora >= 20 && hora <= 23 || (hora >= 0 && hora <= 5)) {
                    parteDoDia = "Boa Noite, " + pedido.Nome_Empresa + ".";
                }
                if (resultado) {
                    var mensagemResultado = "Informamos que você acabou de ser bloqueado pela nossa empresa. \nSe você não sabe a razão pela qual foi bloqueado por favor contacte a nossa empresa através do email pressplay1920@gmail.com";
                } else {
                    var mensagemResultado = "Informamos que você acabou de ser desbloqueado pela nossa empresa. \nEstamos felizes por tê-lo de volta e pedimos desculpa por qualquer incómodo.";
                }

                mensagemResultado += "\n\nDetalhes da Empresa: "
                mensagemResultado += "\nId: " + id;
                mensagemResultado += "\nNome Empresa: " + pedido.Nome_Empresa;
                mensagemResultado += "\nContacto: " + pedido.Contacto;
                mensagemResultado += "\nLocalização: " + pedido.Localizacao;
                mensagemResultado += "\n Se estas informações não correspondem à sua empresa por favor contacte a nossa empresa através do email pressplay1920@gmail.com"
                var text = parteDoDia + mensagemResultado;

                var mailOptions = {
                    from: 'pressplay1920@gmail.com', // sender address
                    to: pedido.Email, // list of receivers
                    subject: ' Bloqueio Press&Play ', // Subject line
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

function sendResult(resultado, id) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'pressplay1920@gmail.com',
            pass: 'passe12345nova'
        }
    });
    var pedido;
    get = { idPatrocinador: id };
    const query = connect.con.query('SELECT * FROM Patrocinador WHERE ?', get, function (err, rows, fields) {
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
                    parteDoDia = "Bom dia, " + pedido.Nome_Empresa + ".";
                }
                if (hora >= 12 && hora <= 19) {
                    parteDoDia = "Boa Tarde, " + pedido.Nome_Empresa + ".";
                }
                if (hora >= 20 && hora <= 23 || (hora >= 0 && hora <= 5)) {
                    parteDoDia = "Boa Noite, " + pedido.Nome_Empresa + ".";
                }
                if (resultado) {
                    var mensagemResultado = " O seu pedido de patrocínio foi aceite.";
                    subjectResultado = "Aceite";
                    twitterController.sendTweet("Diz olá ao nosso novo Patrocinador, " + pedido.Nome_Empresa + ". https://press-and-play.herokuapp.com");
                } else {
                    var mensagemResultado = " O seu pedido de patrocínio foi recusado.";
                    subjectResultado = "Recusado";
                }

                mensagemResultado += "\n\nDetalhes do Pedido: "
                mensagemResultado += "\nId: " + id;
                mensagemResultado += "\nNome Empresa: " + pedido.Nome_Empresa;
                mensagemResultado += "\nContacto: " + pedido.Contacto;
                mensagemResultado += "\nLocalização: " + pedido.Localizacao;
                mensagemResultado += "\nValor : " + pedido.Valor + " €";
                var text = parteDoDia + mensagemResultado;

                var mailOptions = {
                    from: 'pressplay1920@gmail.com', // sender address
                    to: pedido.Email, // list of receivers
                    subject: ' Pedido de Patrocínio Press&Play ' + subjectResultado, // Subject line
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

module.exports = {
    read: read,
    readID: readID,
    save: save,
    update: update,
    block: block,
    desblock: desblock,
    deleteL: deleteL,
    deleteF: deleteF,
    accept: accept,
    deny: deny
};
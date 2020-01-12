const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "bd");
const jsonMessagesLogin = require('../assets/jsonMessages/login.js');
const jsonMessagesMail = require('../assets/jsonMessages/mail.js');
const connect = require('../config/connectMySQL');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig.js');
const nodemailer = require('nodemailer');
const saltRounds = 10;
const bcrypt = require('bcryptjs');

function read(req, res) {
    const query = connect.con.query('SELECT * FROM Gestor_Admin', function (err, rows, fields) {
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
    const idGestor_Admin = req.sanitize('id').escape();
    get = {
        idGestor_Admin: idGestor_Admin
    };
    const query = connect.con.query('SELECT * FROM Gestor_Admin WHERE ?', get, function (err, rows, fields) {
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
    const Nome = req.sanitize('Nome').escape();
    const Email = req.sanitize('Email').escape();
    const Password = generatePassword();
    const Contacto = req.body.Contacto;
    const Tipo = req.body.Tipo;
    console.log("entrei");
    req.checkBody("Nome", "Nome não é válido").matches(/^[a-zA-Z\sа-яА-Яêãõêãâá\']+$/g);
    req.checkBody("Nome", "Nome é obrigatório").notEmpty();
    req.checkBody('Email', 'Email não é válido').isEmail();
    req.checkBody('Email', 'Email é obrigatório').notEmpty();
    req.checkBody('Contacto', 'Contacto inválido').isNumeric();
    req.checkBody('Tipo', 'Tipo é inválido').isNumeric();
    const errors = req.validationErrors();

    if (errors) {
        res.send(errors);
        return;
    } else {
        if (Nome != "NULL" && Email != "NULL" && Password != "NULL") {
            if (Tipo != 2) {
                bcrypt.hash(Password, saltRounds).then(function (hash) {
                    const post = {
                        Nome: Nome,
                        Email: Email,
                        Contacto: Contacto,
                        Password: hash,
                        Tipo: Tipo,
                        Ativo: 1,
                        Resultado: 0,
                        dataAplicacao: new Date()
                    };
                    const query = connect.con.query('INSERT INTO Gestor_Admin SET ?', post, function (err, rows, fields) {
                        console.log(query.sql);
                        if (!err) {
                            console.log(rows.insertId);
                            res.statusMessage = rows.insertId.toString();
                            sendNewAdmin(rows.insertId, Password);
                            res.status(jsonMessages.db.successInsert.status).send(jsonMessages.db.successInsert);
                        } else {
                            if (err.code.toString() == "ER_DUP_ENTRY") {
                                res.status(409).send(jsonMessages.db.duplicateEmail);
                            } else {
                                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                            }
                            console.log(err);
                        }
                    });
                });
            }
            else {
                const post = {
                    Nome: Nome,
                    Email: Email,
                    Contacto: Contacto,
                    Tipo: Tipo,
                    Ativo: 1,
                    Resultado: 0,
                    dataAplicacao: new Date()
                };
                const query = connect.con.query('INSERT INTO Gestor_Admin SET ?', post, function (err, rows, fields) {
                    console.log(query.sql);
                    if (!err) {
                        console.log(rows.insertId);
                        res.statusMessage = rows.insertId.toString();
                        res.status(jsonMessages.db.successInsert.status).send(jsonMessages.db.successInsert);
                    } else {
                        if (err.code.toString() == "ER_DUP_ENTRY") {
                            res.status(409).send(jsonMessages.db.duplicateEmail);
                        } else {
                            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                        }
                        console.log(err);
                    }
                });
            }
        } else {
            res.status(jsonMessages.db.requiredData.status).end(jsonMessages.db.requiredData);
        }
    }
}

function update(req, res) {
    const idGestor_Admin = req.sanitize('id').escape();
    const Nome = req.sanitize('Nome').escape();
    const Email = req.sanitize('Email').escape();
    const Password = req.sanitize('Password').escape();
    const Contacto = req.body.Contacto;
    const Tipo = req.body.Tipo;
    const Ativo = req.body.Ativo;
    req.checkBody("Nome", "Nome não é válido").matches((/^[a-zA-Z\sа-яА-Яêãõêãâá\']+$/g));
    req.checkBody("Nome", "Nome é obrigatório").notEmpty();
    req.checkBody('Email', 'Email não é válido').isEmail();
    req.checkBody('Email', 'Email é obrigatório').notEmpty();
    req.checkBody('Contacto', 'Contacto inválido').isNumeric();
    req.checkBody('Tipo', 'Tipo é inválido').isNumeric();
    req.checkBody('Ativo', 'Ativo é inválido').isNumeric();
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    } else {
        if (idGestor_Admin != "NULL" && typeof (Nome) != 'undefined' && typeof (Email) != 'undefined' && typeof (Email) != 'undefined' && typeof (Contacto) != 'undefined' && typeof (Ativo) != 'undefined' && typeof (Tipo) != 'undefined') {
            bcrypt.hash(Password, saltRounds).then(function (hash) {
                const update = [Nome, Email, Contacto, hash, Tipo, Ativo, idGestor_Admin];
                const query = connect.con.query('UPDATE Gestor_Admin SET Nome = ?, Email = ? ,Contacto = ? , Password = ? ,Tipo= ?, Ativo = ?  WHERE idGestor_Admin = ?', update, function (err, rows, fields) {
                    console.log(query.sql);
                    if (!err) {
                        res.status(jsonMessages.db.successUpdate.status).send(jsonMessages.db.successUpdate);
                    } else {
                        if (err.code == "ER_DUP_ENTRY") {
                            res.status(jsonMessages.db.duplicateEmail.status).send(jsonMessages.db.duplicateEmail);
                        } else {
                            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                        }
                        console.log(err);
                    }
                });
            });
        } else
            res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
}

function updatePWD(req, res) {
    const idGestor_Admin = req.sanitize('id').escape();
    const Password = req.body.Password;
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    } else {
        if (idGestor_Admin != "NULL") {
            bcrypt.hash(Password, saltRounds).then(function (hash) {
                const update = [hash, idGestor_Admin];
                const query = connect.con.query('UPDATE Gestor_Admin SET Password = ? WHERE idGestor_Admin = ?', update, function (err, rows, fields) {
                    console.log(query.sql);
                    if (!err) {
                        res.status(jsonMessages.db.successUpdate.status).send(jsonMessages.db.successUpdate);
                    } else {
                        if (err.code == "ER_DUP_ENTRY") {
                            res.status(jsonMessages.db.duplicateEmail.status).send(jsonMessages.db.duplicateEmail);
                        } else {
                            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                        }
                        console.log(err);
                    }
                });
            });
        } else
            res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
}

function deleteL(req, res) {
    const update = [0, req.sanitize('id').escape()];
    const query = connect.con.query('UPDATE Gestor_Admin SET Ativo = ? WHERE idGestor_Admin=?', update, function (err, rows, fields) {
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
    const query = connect.con.query('DELETE FROM Gestor_Admin WHERE idGestor_Admin=?', update, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(jsonMessages.db.successDeleteU.status).send(jsonMessages.db.successDeleteU);
        } else {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
    });
}

function emailExists(req, res) {
    const email = req.sanitize('email').escape();
    const query = connect.con.query('SELECT * FROM Gestor_Admin WHERE Email=?', email, function (err, rows, fields) {
        console.log(query.sql);
        if (err) {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        } else {
            if (rows.length == 0) {
                res.send(false);
            } else {
                res.send(true);
            }
        }
    });
}

function forgotPassword(req, res) {
    var Email = req.body.Email;
    if (Email) {
        const query = connect.con.query('SELECT * FROM Gestor_Admin WHERE Email = ?', [Email], function (err, rows, fields) {
            console.log(query.sql);
            if (err) {
                console.log(err);
                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
            } else {
                if (rows.length > 0) {
                    var mensagem = "Olá " + rows[0].Nome + ". Recebeu este email porque alguem iniciou o processo de recuperação da sua password Press&Play.\n\nEmail: " + Email + "\nPassword: " + rows[0].Password;
                    mensagem += "\n\nhttps://press-and-play.herokuapp.com/login"
                    mensagem += "\n\n\nSe não foi você que iniciou este processo, porfavor ignore este email."
                    var transporter = nodemailer.createTransport({
                        service: 'Gmail',
                        auth: {
                            user: 'pressplay1920@gmail.com',
                            pass: 'passe12345nova'
                        }
                    });
                    var mailOptions = {
                        from: 'pressplay1920@gmail.com', // sender address
                        to: rows[0].Email, // list of receivers
                        subject: 'Pedido de recuperação de password Press&Play', // Subject line
                        text: mensagem

                    };
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                            res.status(jsonMessagesMail.mail.mailError.status).send(jsonMessagesMail.mail.mailError);
                        } else {
                            console.log('Message sent: ' + info.response);
                            res.status(jsonMessagesMail.mail.mailSent.status).send(jsonMessagesMail.mail.mailSent);
                        };
                    });


                } else {
                    res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
                }
            }
        });
    } else {
        res.status(jsonMessagesLogin.user.invalid.status).send(jsonMessagesLogin.user.invalid);
    }
}

function getLastInserted(req, res) {
    const query = connect.con.query('SELECT max(idGestor_Admin) As id FROM pkfFqmJ7Jh.Gestor_Admin', function (err, rows, fields) {
        console.log(query.sql);
        if (err) {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        } else {
            if (rows.length == 0) {
                res.send(false);
            } else {
                res.send(rows);
            }
        }
    });
}

function signIn(req, res) {
    var Email = req.body.Email;
    var Password = req.body.Password;
    if (Email && Password) {
        const query = connect.con.query('SELECT * FROM Gestor_Admin WHERE Email = ?', [Email], function (err, rows, fields) {
            console.log(query.sql);
            if (err) {
                console.log(err);
                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
            } else {
                if (rows.length > 0) {
                    bcrypt.compare(Password, rows[0].Password, function (err, res1) {
                        if (res1) {
                            jwt.sign({ id: rows[0].idGestor_Admin, nome: rows[0].Nome, email: rows[0].Email, pass: Password, contacto: rows[0].Contacto },
                                jwtConfig.secret, { expiresIn: '2h' }, (err, token) => {
                                    res.cookie('auth', token, { maxAge: 2 * 60 * 60 * 1000 });
                                    res.cookie('idC', rows[0].idGestor_Admin, { maxAge: 2 * 60 * 60 * 1000 });
                                    res.cookie('tipoC', rows[0].Tipo, { maxAge: 2 * 60 * 60 * 1000 });
                                    res.status(jsonMessagesLogin.user.signinSucces.status).send(jsonMessagesLogin.user.signinSucces);
                                }
                            );
                        } else {
                            console.log(res1);
                            console.log(err);
                            res.status(jsonMessagesLogin.user.incorrect.status).send(jsonMessagesLogin.user.incorrect);
                        }
                    });
                } else {
                    res.status(jsonMessagesLogin.user.incorrect.status).send(jsonMessagesLogin.user.incorrect);
                }
            }
        });
    } else {
        res.status(jsonMessagesLogin.user.invalid.status).send(jsonMessagesLogin.user.invalid);
    }
}

function signOut(req, res) {
    res.clearCookie("auth");
    res.clearCookie("idC");
    res.clearCookie("tipoC");
    res.redirect('/login')
}

function accept(req, res) {
    const idGestor_Admin = req.sanitize('id').escape();
    const password = generatePassword();

    bcrypt.hash(password, saltRounds).then(function (hash) {
        const update = [hash, idGestor_Admin];
        const query = connect.con.query('UPDATE Espaco, Gestor_Admin SET Espaco.ativo = 1, Gestor_Admin.Password = ?, Gestor_Admin.Resultado = 1, Gestor_Admin.ativo = 1 WHERE Espaco.idGestor_Admin_FK9 = Gestor_Admin.idGestor_Admin AND Gestor_Admin.idGestor_Admin = ?', update, function (err, rows, fields) {
            console.log(query.sql);
            if (!err) {
                sendResult(true, idGestor_Admin, password);
                res.status(jsonMessages.db.successUpdate.status).send(jsonMessages.db.successUpdate);
            } else {
                console.log(err);
                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
            }
        });
    });
}

function deny(req, res) {
    const idGestor_Admin = req.sanitize('id').escape();

    const update = [idGestor_Admin];
    const query = connect.con.query('UPDATE Espaco, Gestor_Admin SET Espaco.ativo = 0, Gestor_Admin.Resultado = -1, Gestor_Admin.ativo = 1 WHERE Espaco.idGestor_Admin_FK9 = Gestor_Admin.idGestor_Admin AND Gestor_Admin.idGestor_Admin = ?', update, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            sendResult(false, idGestor_Admin);
            res.status(jsonMessages.db.successUpdate.status).send(jsonMessages.db.successUpdate);
        } else {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
    });
}

function sendResult(id, pass) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'pressplay1920@gmail.com',
            pass: 'passe12345nova'
        }
    });
    var pedido;
    get = { idGestor_Admin: id };
    const query = connect.con.query('SELECT * FROM Gestor_Admin WHERE ?', get, function (err, rows, fields) {
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
                    parteDoDia = "Bom dia, " + pedido.Nome + ".";
                }
                if (hora >= 12 && hora <= 19) {
                    parteDoDia = "Boa Tarde, " + pedido.Nome + ".";
                }
                if (hora >= 20 && hora <= 23 || (hora >= 0 && hora <= 5)) {
                    parteDoDia = "Boa Noite, " + pedido.Nome + ".";
                }
                if (resultado) {
                    var mensagemResultado = " O seu pedido de parceria foi aceite.\n";
                    mensagemResultado += "Recebeu este email porque foi aceite como um dos nossos parceiros, pelo que poderá aceder à sua área reservada através das seguintes credenciais:\n"
                    mensagemResultado += "Email:" + pedido.Email;

                    mensagemResultado += "\nPassword:" + pass;
                    subjectResultado = "Aceite";
                } else {
                    var mensagemResultado = " O seu pedido de parceria foi recusado.";
                    subjectResultado = "Recusado";
                }

                mensagemResultado += "\n\nDetalhes do Pedido: "
                mensagemResultado += "\nId: " + id;
                mensagemResultado += "\nNome Empresa: " + pedido.Nome;
                mensagemResultado += "\nContacto: " + pedido.Contacto;
                var text = parteDoDia + mensagemResultado;

                var mailOptions = {
                    from: 'pressplay1920@gmail.com', // sender address
                    to: pedido.Email, // list of receivers
                    subject: ' Pedido de Parceria Press&Play ' + subjectResultado, // Subject line
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

function sendNewAdmin(id, pass) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'pressplay1920@gmail.com',
            pass: 'passe12345nova'
        }
    });
    var pedido;
    get = { idGestor_Admin: id };
    const query = connect.con.query('SELECT * FROM Gestor_Admin WHERE ?', get, function (err, rows, fields) {
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
                    parteDoDia = "Bom dia, " + pedido.Nome + ".";
                }
                if (hora >= 12 && hora <= 19) {
                    parteDoDia = "Boa Tarde, " + pedido.Nome + ".";
                }
                if (hora >= 20 && hora <= 23 || (hora >= 0 && hora <= 5)) {
                    parteDoDia = "Boa Noite, " + pedido.Nome + ".";
                }
                var mensagemResultado = " Nova Conta Administrador.\n";
                mensagemResultado += "Recebeu este email porque foi associado como um dos nossos administradores, pelo que poderá aceder à sua área reservada através das seguintes credenciais:\n"
                mensagemResultado += "Email:" + pedido.Email;

                mensagemResultado += "\nPassword:" + pass;
                subjectResultado = "Aceite";

                mensagemResultado += "\n\nDetalhes do Pedido: "
                mensagemResultado += "\nId: " + id;
                mensagemResultado += "\nNome Empresa: " + pedido.Nome;
                mensagemResultado += "\nContacto: " + pedido.Contacto;
                var text = parteDoDia + mensagemResultado;

                var mailOptions = {
                    from: 'pressplay1920@gmail.com', // sender address
                    to: pedido.Email, // list of receivers
                    subject: ' Novo Administrador Press&Play ' + subjectResultado, // Subject line
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

function block(req, res) {
    const idGestor_Admin = req.sanitize('id').escape();
    const update = [idGestor_Admin];
    const query = connect.con.query('UPDATE Gestor_Admin SET bloqueado=1 WHERE idGestor_Admin=?', update, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(jsonMessages.db.successUpdate.status).send(jsonMessages.db.successUpdate);
        } else {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
    });
}

function unblock(req, res) {
    const idGestor_Admin = req.sanitize('id').escape();
    const update = [idGestor_Admin];
    const query = connect.con.query('UPDATE Gestor_Admin SET bloqueado=0 WHERE idGestor_Admin=?', update, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(jsonMessages.db.successUpdate.status).send(jsonMessages.db.successUpdate);
        } else {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
    });
}

function generatePassword() {
    var length = 8,
        charset = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

module.exports = {
    read: read,
    readID: readID,
    save: save,
    update: update,
    deleteL: deleteL,
    deleteF: deleteF,
    emailExists: emailExists,
    forgotPassword: forgotPassword,
    signIn: signIn,
    signOut: signOut,
    getLastInserted: getLastInserted,
    accept: accept,
    deny: deny,
    block: block,
    unblock: unblock,
    updatePWD: updatePWD
};
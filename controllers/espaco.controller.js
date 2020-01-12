const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "bd");
const connect = require('../config/connectMySQL');
const controllerGestorAdmin = require('./gestorAdmin.controller');


function read(req, res) {
    const query = connect.con.query('SELECT * FROM Espaco', function(err, rows, fields) {
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
    const idEspaco = req.sanitize('id').escape();
    get = {
        idEspaco: idEspaco
    };
    const query = connect.con.query('SELECT * FROM Espaco WHERE ?', get, function(err, rows, fields) {
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

function readGestorID(req, res) {
    const idGestor = req.sanitize('id').escape();
    get = {
        idGestor_Admin_FK9: idGestor
    };
    const query = connect.con.query('SELECT * FROM Espaco WHERE ?', get, function (err, rows, fields) {
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
    console.log("entrei aqui 0");
    const Nome = req.sanitize('Nome_Espaco').escape();
    const Localizacao = req.sanitize('Localizacao').escape();
    const Preco = req.body.Preco;
    const idGestor = req.sanitize("idGestor_Admin").escape();
    console.log(idGestor);
    req.checkBody("Nome_Espaco", "Nome não é válido").matches(/^[a-zA-Z\sа-яА-Яêãõêãâá\']+$/g);
    req.checkBody("Nome_Espaco", "Nome é obrigatório").notEmpty();
    req.checkBody("Localizacao", "Nome não é válido").matches(/^[a-zA-Z\sа-яА-Яêãõêãâá\']+$/g);
    req.checkBody("Localizacao", "Localizacao é obrigatório").notEmpty();
    req.checkBody('Preco', 'Preco inválido').isNumeric();
    const errors = req.validationErrors();
    console.log(errors);
    
    if (errors) {
        console.log("entrei aqui 1");
        res.send(errors);
        return;
    } else {
        if (Nome != "NULL" && Localizacao != "NULL") {
            console.log("entrei aqui 2");
            const post = {
                Nome: Nome,
                Localizacao: Localizacao,
                ativo: 0,
                Preco: Preco,
                idGestor_Admin_FK9: idGestor
            };
            const query = connect.con.query('INSERT INTO Espaco SET ?', post, function(err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    console.log("entrei aqui 3");
                    res.statusMessage = rows.insertId.toString();
                    res.status(201).send(jsonMessages.db.successInsert);
                } else {
                    console.log("entrei aqui 4");
                    console.log(err);
                    if (err.code == "ER_NO_REFERENCED_ROW") {
                        res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.missingGestor);
                    } else {
                        res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                    }

                }
            });

        } else
            res.status(jsonMessages.db.requiredData.status).end(jsonMessages.db.requiredData);
    }
}

function update(req, res) {
    const Nome = req.sanitize('Nome').escape();
    const Localizacao = req.sanitize('Localizacao').escape();
    const Estado = req.sanitize('Estado').escape();
    const Preco = req.body.Preco;
    const idEspaco = req.sanitize("id").escape();
    req.checkBody("Nome", "Nome não é válido").matches(/^[a-zA-Z\sа-яА-Яêãõêãâá\']+$/g);
    req.checkBody("Nome", "Nome é obrigatório").notEmpty();
    req.checkBody("Localizacao", "Nome não é válido").matches(/^[a-zA-Z\sа-яА-Яêãõêãâá\,]+$/g);
    req.checkBody("Localizacao", "Nome é obrigatório").notEmpty();
    req.checkBody("Estado", "Estado não é válido").matches(/^[a-zA-Z\sа-яА-Яêãõêãâá\,]+$/g);
    req.checkBody("Estado", "Estado é obrigatório").notEmpty();
    req.checkBody('Preco', 'Preco inválido').isNumeric();
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    } else {
        if (Nome != "NULL" && Localizacao != "NULL" && Estado != "NULL") {
            const put = [Nome, Localizacao, Estado, Preco, idEspaco];
            const query = connect.con.query('UPDATE Espaco SET Nome = ? , Localizacao = ?, Estado = ?, Preco = ? WHERE idEspaco = ?', put, function(err, rows, fields) {
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

function deleteF(req, res) {
    const update = req.sanitize('id').escape();
    const query = connect.con.query('DELETE FROM Espaco WHERE idEspaco =?', update, function(err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(jsonMessages.db.successDeleteU.status).send(jsonMessages.db.successDeleteU);
        } else {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        }
    });
}
function getLastInserted(req, res) {
    const query = connect.con.query('SELECT max(idEspaço) FROM pkfFqmJ7Jh.Espaco;', function (err, rows, fields) {
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
module.exports = {
    read: read,
    readID: readID,
    readGestorID: readGestorID,
    save: save,
    update: update,
    deleteF: deleteF,
    getLastInserted: getLastInserted
};
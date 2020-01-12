const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "bd");
const connect = require('../config/connectMySQL');
const controllerGestorAdmin = require('./gestorAdmin.controller');

//function read(req, res) {
//    const query = connect.con.query('SELECT * FROM Espaco', function (err, rows, fields) {
//        console.log(query.sql);
//        if (err) {
//            console.log(err);
//            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
//        } else {
//            if (rows.length == 0) {
//                res.status(jsonMessages.db.noRecords.status).send(jsonMessages.db.noRecords);
//            } else {
//                res.send(rows);
//            }
//        }
//    });
//}

function readID(req, res) {
    const idEspaco = req.sanitize('id').escape();
    get = {
        idEspaco_FK4: idEspaco
    };
    const query = connect.con.query('SELECT * FROM Comodidade_espaco WHERE ? ORDER BY idComodidade_FK3', get, function (err, rows, fields) {
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
    const idEspaco = req.body.idEspaco;
    const idComodidade = req.body.idComodidade;
    const Possui = req.body.Possui;
    req.checkBody("idEspaco", "IdEspaco Inválido").isNumeric();
    req.checkBody("idComodidade", "IdComodidade Inválido").isNumeric();
    req.checkBody('Possui', 'Possui inválido').isNumeric();
    const errors = req.validationErrors();

    if (errors) {
        res.send(errors);
        return;
    } else {
        if (idEspaco != "NULL" && idComodidade != "NULL" && Possui != "NULL") {
            const post = {
                idEspaco_FK4: idEspaco,
                idComodidade_FK3: idComodidade,
                Possui: Possui
            };
            const query = connect.con.query('INSERT INTO Comodidade_espaco SET ?', post, function (err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    res.status(jsonMessages.db.successInsert.status).location(rows.insertId).send(jsonMessages.db.successInsert);
                } else {
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
    const idComodidade_Espaco = req.body.idEspaco;
    const Possui = req.body.Possui;
    req.checkBody("idEspaco", "IdEspaco Inválido").isNumeric();
    req.checkBody("idComodidade", "IdComodidade Inválido").isNumeric();
    req.checkBody('Possui', 'Possui inválido').isNumeric();

    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    } else {
        if (idComodidade_espaco != "NULL" && Possui != "NULL") {
            const put = [Possui, idComodidade_espaco];
            const query = connect.con.query('UPDATE Comodidade_Espaco SET Possui = ? WHERE idComodidade_espaco = ?', put, function (err, rows, fields) {
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
    const query = connect.con.query('DELETE FROM Espaco WHERE idEspaco =?', update, function (err, rows, fields) {
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
    readID: readID,
    save: save,
    update: update,
    deleteF: deleteF
};

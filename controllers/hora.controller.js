const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "bd");
const connect = require('../config/connectMySQL');

function read(req, res) {
    const query = connect.con.query('SELECT * FROM Hora', function(err, rows, fields) {
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
    const idHora = req.sanitize('id').escape();
    get = {
        idHora: idHora
    };
    const query = connect.con.query('SELECT * FROM Hora WHERE ?', get, function(err, rows, fields) {
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
    const Hora_disp = req.sanitize('Hora_disp').escape();
    /*Não tem o match*/
    req.checkBody("Hora_disp", "Hora é obrigatória").notEmpty();
    const errors = req.validationErrors();

    if (errors) {
        res.send(errors);
        return;
    } else {
        if (Hora_disp != "NULL") {

            const post = {
                Hora_disp: Hora_disp
            };
            const query = connect.con.query('INSERT INTO Hora SET ?', post, function(err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    res.status(jsonMessages.db.successInsert.status).location(rows.insertId).send(jsonMessages.db.successInsert);
                } else {
                    if (err.code == "ER_DUP_ENTRY") {
                        res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.duplicateEmail);
                    } else {
                        res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                    }
                    console.log(err);
                }
            });

        } else
            res.status(jsonMessages.db.requiredData.status).end(jsonMessages.db.requiredData);
    }
}

function update(req, res) {
    const idHora = req.sanitize('id').escape();
    const Hora_disp = req.sanitize('Hora_disp').escape();
    /*Não tem match*/
    req.checkBody("Hora_disp", "Hora é obrigatória").notEmpty();
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    } else {
        if (idHora != "NULL" && typeof(Hora_disp) != 'undefined') {
            const update = [Hora_disp];
            const query = connect.con.query('UPDATE Hora SET Hora_disp = ?', update, function(err, rows, fields) {
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

        } else
            res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
}

function deleteF(req, res) {
    const update = req.sanitize('id').escape();
    const query = connect.con.query('DELETE FROM Hora WHERE idHora=?', update, function(err, rows, fields) {
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
    save: save,
    update: update,
    deleteF: deleteF
};
const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "bd");
const connect = require('../config/connectMySQL');

function read(req, res) {
    const query = connect.con.query('SELECT * FROM Evento', function(err, rows, fields) {
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
    const idEvento = req.sanitize('id').escape();
    get = { idEvento: idEvento };
    const query = connect.con.query('SELECT * FROM Evento WHERE ?', get, function(err, rows, fields) {
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
    const idGestor_Admin = req.sanitize("id").escape();
    const idAtividade = req.sanitize("id").escape();
    const Tipo = req.body.Tipo;
    req.checkBody('Tipo', 'Tipo é obrigatorio').notEmpty();
    const errors = req.validationErrors();
    if (errors) {
        console.log(errors);
        return;
    } else {
        if (Tipo != "NULL") {
            const post = {
                Tipo: Tipo
            };
            const query = connect.con.query('INSERT INTO Evento SET ?', post, function(err, rows, fields) {
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
    const idEvento = req.sanitize('id').escape();
    const idGestor_Admin = req.sanitize('id').escape();
    const idAtividade = req.sanitize('id').escape();
    const Tipo = req.body.Tipo;
    req.checkBody('Tipo', 'Tipo é obrigatório').notEmpty();
    const errors = req.validationErrors();
    if (errors) {
        res.send(errors);
        return;
    } else {
        if (Tipo != "NULL") {
            const update = [Tipo, idEvento, idGestor_Admin, idAtividade];
            const query = connect.con.query('UPDATE Evento SET Tipo =?  WHERE idEvento = ?', update, function(err, rows, fields) {
                console.log(query.sql);
                if (!err) {
                    res.status(jsonMessages.db.successUpdate.status).send(jsonMessages.db.successUpdate);
                } else {
                    console.log(err);
                    res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
                }
            });
        } else
            res.status(jsonMessages.db.requiredData.status).send(jsonMessages.db.requiredData);
    }
}

function deleteL(req, res) {
    const update = [0, req.sanitize('id').escape()];
    const query = connect.con.query('UPDATE Evento SET Ativo = ? WHERE idEvento = ?', update, function(err, rows, fields) {
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
    const query = connect.con.query('DELETE FROM Evento WHERE idEvento = ?', update, function(err, rows, fields) {
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
    deleteL: deleteL,
    deleteF: deleteF
};
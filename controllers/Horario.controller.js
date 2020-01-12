const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "bd");
const connect = require('../config/connectMySQL');

function read(req, res) {
    const query = connect.con.query('SELECT * FROM Horario', function(err, rows, fields) {
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
    const id = req.sanitize('id').escape();
    get = { idEspaco: id };
    const query = connect.con.query('SELECT * FROM Horario WHERE ?', get, function(err, rows, fields) {
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
    const diaSemana = req.sanitize('Data').escape();
    const idEspaco = req.body.idEspaco;
    const dataAbertura = req.sanitize('Hora_abertura').escape();
    const dataFecho = req.sanitize('Hora_encerramento').escape();
    req.checkBody("idEspaco", "IdEspaco Inválido").isNumeric();
    req.checkBody("Data", "Data é obrigatório").notEmpty();
    req.checkBody("Hora_abertura", "Hora Abertura é obrigatório").notEmpty();
    req.checkBody("Hora_encerramento", "Hora Encerramento é obrigatório").notEmpty();
    const errors = req.validationErrors();
    if (errors) {
        console.log(errors);
        return;
    } else {
        const post = {
            diaSemana: diaSemana,
            idEspaco: idEspaco,
            abertura: dataAbertura,
            encerramento: dataFecho
        };
        const query = connect.con.query('INSERT INTO Horario SET ?', post, function (err, rows, fields) {
            console.log(query.sql);
            if (!err) {
                res.status(jsonMessages.db.successInsert.status).location(rows.insertId).send(jsonMessages.db.successInsert);
            } else {
                console.log(err);
                res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
            }
        });
    }
}

module.exports = {
    read: read,
    readID: readID,
    save: save
};
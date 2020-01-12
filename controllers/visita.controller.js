const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "bd");
const connect = require('../config/connectMySQL');


function read(req, res) {
    const query = connect.con.query('SELECT COUNT(*) FROM Visita;', function(err, rows, fields) {
        console.log(query.sql);
        if (err) {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        } else {
            res.send(Object.values(rows[0]));
        }
    });
}

function readAll(req, res) {
    const query = connect.con.query('SELECT * FROM Visita', function (err, rows, fields) {
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

function readDate(req, res) {
    const ano = req.sanitize('ano').escape();
    const mes = req.sanitize('mes').escape();
    const dia = req.sanitize('dia').escape();
    get = [ano, mes, dia];
    const query = connect.con.query('SELECT COUNT(*) FROM Visita WHERE ano = ? AND mes = ? AND dia = ?', get, function(err, rows, fields) {
        console.log(query.sql);
        if (err) {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        } else {
            res.send(Object.values(rows[0]));
        }
    });
}

function readMonth(req, res) {
    const ano = req.sanitize('ano').escape();
    const mes = req.sanitize('mes').escape();
    get = [ano, mes];
    const query = connect.con.query('SELECT COUNT(*) FROM Visita WHERE ano = ? AND mes = ?', get, function(err, rows, fields) {
        console.log(query.sql);
        if (err) {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        } else {
            res.send(Object.values(rows[0]));
        }
    });
}

function readYear(req, res) {
    const ano = req.sanitize('ano').escape();
    get = { ano: ano };
    const query = connect.con.query('SELECT COUNT(*) FROM Visita WHERE ?', get, function(err, rows, fields) {
        console.log(query.sql);
        if (err) {
            console.log(err);
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
        } else {
            res.send(Object.values(rows[0]));
        }
    });
}

function save(req, res) {
    var data = new Date();
    const ano = data.getFullYear();
    const mes = data.getMonth() + 1;
    const dia = data.getDate();
    const post = { ano: ano, mes: mes, dia: dia };

    const query = connect.con.query('INSERT INTO Visita SET ?', post, function(err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(jsonMessages.db.successInsert.status).location(rows.insertId).send(jsonMessages.db.successInsert);
        } else {
            res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
            console.log(err);
        }
    });
}

/*function reset(req, res) {
    
    const erro ="";
    const query = connect.con.query('DELETE FROM Visita;', function(err, rows, fields) {
        console.log(query.sql);
        
    });
    const query2 = connect.con.query(' ALTER TABLE Visita AUTO_INCREMENT=1;', function(err, rows, fields) {
        console.log(query2.sql);

    });


    if (err) {
        console.log(err);
        res.status(jsonMessages.db.dbError.status).send(jsonMessages.db.dbError);
    } else {
        res.status(jsonMessages.db.successDeleteU.status).send(jsonMessages.db.successDeleteU);
    }

} */

module.exports = {
    read: read,
    readDate: readDate,
    readMonth: readMonth,
    readYear: readYear,
    save: save,
    readAll: readAll
        //,reset: reset
}
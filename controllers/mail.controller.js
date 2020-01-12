const jsonMessagesPath = __dirname + "/../assets/jsonMessages/";
const jsonMessages = require(jsonMessagesPath + "mail");
const nodemailer = require('nodemailer');

function sendSugestion(req, res) {
    const Mensagem = req.sanitize('Mensagem').escape();
    const Email = req.sanitize('Email').escape();
    const Nome = req.sanitize('Nome').escape();
    const Tipo = req.sanitize('Tipo');
    req.checkBody("Mensagem", "Mensagem é obrigatória").notEmpty();
    req.checkBody('Email', 'Email não é válido').isEmail();
    req.checkBody('Email', 'Email é obrigatório').notEmpty();
    req.checkBody('Nome', 'Nome é obrigatório').notEmpty();
    req.checkBody('Tipo', 'Tipo é obrigatório').notEmpty();
    req.checkBody('Tipo', 'Tipo é inválido').isNumeric();

    const errors = req.validationErrors();
    if (errors) {
        console.log(errors);
        res.status(jsonMessages.mail.invalidData.status).send(jsonMessages.mail.invalidData);
        return;
    } else {

        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'pressplay1920@gmail.com',
                pass: 'passe12345nova'
            }
        });

        var data = new Date();
        const ano = data.getFullYear();
        var text = "Recebeu ";
        var subject = "Recebeu ";
        if (Tipo == 1) {
            subject += "uma nova Sugestão!"
            text += "a seguinte sugestão:"
        } else {
            subject += "uma nova Mensagem!"
            text += "a seguinte mensagem:"
        }


        text += "\n\n   Nome: " + Nome;
        text += "\n   Email: " + Email;
        text += "\n   Mensagem: " + Mensagem;
        text += "\n   Data: " + data.toLocaleString();
        var mailOptions = {
            from: 'pressplay1920@gmail.com',
            to: 'pressplay1920@gmail.com',
            subject: subject,
            text: text

        };
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
                res.status(jsonMessages.mail.mailError.status).send(jsonMessages.mail.mailError);
            } else {
                console.log('Message sent: ' + info.response);
                res.status(jsonMessages.mail.mailSent.status).send(jsonMessages.mail.mailSent);
            };
        });
    }
}








module.exports = {
    sendSugestion: sendSugestion
};
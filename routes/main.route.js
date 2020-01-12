const router = require('express').Router();
const controllerGestorAdmin = require('../controllers/gestorAdmin.controller.js');
const controllerPatrocinadores = require('../controllers/patrocinador.controller.js');
const controllerEspacos = require('../controllers/espaco.controller.js');
const controllerHorario = require('../controllers/horario.controller');
const controllerAtividade = require('../controllers/atividade.controller.js');
const controllerVisitas = require('../controllers/visita.controller.js');
const controllerHora = require('../controllers/hora.controller.js');
const controllerEventos = require('../controllers/evento.controller.js');
const controllerUsers = require('../controllers/user.controller.js');
const controllerMail = require('../controllers/mail.controller.js');
const controllerComodidadesEspaco = require('../controllers/comodidade_espaco.controller.js');
var path = require('path');
const jtw = require('jsonwebtoken')
const jtwConfig = require('../config/jwtConfig.js')

router.get('/GestorAdmins/', controllerGestorAdmin.read);
router.get('/GestorAdmins/id/', controllerGestorAdmin.getLastInserted);
router.get('/GestorAdmins/:id', controllerGestorAdmin.readID);
router.post('/GestorAdmins/', controllerGestorAdmin.save);
router.put('/GestorAdmins/:id', controllerGestorAdmin.update);
router.put('/GestorAdmins/del/:id', controllerGestorAdmin.deleteL);
router.delete('/GestorAdmins/:id', controllerGestorAdmin.deleteF);
router.get('/GestorAdmins/email/:email', controllerGestorAdmin.emailExists);
router.put('/GestorAdmins/:id/aceitar', controllerGestorAdmin.accept);
router.put('/GestorAdmins/:id/recusar', controllerGestorAdmin.deny);
router.put('/GestorAdmins/:id/bloquear', controllerGestorAdmin.block);
router.put('/GestorAdmins/:id/desbloquear', controllerGestorAdmin.unblock);
router.put('/GestorAdmins/pwd/:id', controllerGestorAdmin.updatePWD);

router.get('/Horario/', controllerHorario.read);
router.get('/Horario/:id', controllerHorario.readID);
router.post('/Horario/', controllerHorario.save);


router.get('/Hora/', controllerHora.read);
router.get('/Hora/:id', controllerHora.readID);
router.post('/Hora/', controllerHora.save);
router.put('/Hora/:id', controllerHora.update);


router.get('/Atividades/', controllerAtividade.read);
router.get('/Atividades/:id', controllerAtividade.readID);


router.get('/Patrocinadores/', controllerPatrocinadores.read);
router.get('/Patrocinadores/:id', controllerPatrocinadores.readID);
router.post('/Patrocinadores/', controllerPatrocinadores.save);
router.put('/Patrocinadores/:id', controllerPatrocinadores.update);
router.put('/Patrocinadores/:id/aceitar', controllerPatrocinadores.accept);
router.put('/Patrocinadores/:id/recusar', controllerPatrocinadores.deny);
router.put('/Patrocinadores/del/:id', controllerPatrocinadores.deleteL);
router.put('/Patrocinadores/bloq/:id', controllerPatrocinadores.block);
router.put('/Patrocinadores/desbloq/:id', controllerPatrocinadores.desblock);
router.delete('/Patrocinadores/:id', controllerPatrocinadores.deleteF);


router.get('/Eventos/', controllerEventos.read);
router.get('/Eventos/:id', controllerEventos.readID);
router.post('/Eventos/', controllerEventos.save);
router.put('/Eventos/:id', controllerEventos.update);
router.put('/Eventos/del/:id', controllerEventos.deleteL);
router.delete('/Eventos/:id', controllerEventos.deleteF);


router.get('/espacos/', controllerEspacos.read);
router.get('/espacos/id/', controllerEspacos.getLastInserted);
router.get('/espacos/:id', controllerEspacos.readID);
router.get('/espacos/gestor/:id', controllerEspacos.readGestorID);
router.post('/espacos/gestor/:id', controllerEspacos.save);
router.put('/espacos/:id', controllerEspacos.update);
router.delete('/espacos/:id', controllerEspacos.deleteF);


router.get('/visitas/', controllerVisitas.read);
router.get('/visitas/all/', controllerVisitas.readAll);
router.get('/visitas/:ano/:mes/:dia', controllerVisitas.readDate);
router.get('/visitas/:ano/:mes', controllerVisitas.readMonth);
router.get('/visitas/:ano', controllerVisitas.readYear);
router.post('/visitas/', controllerVisitas.save);


router.get('/users/', controllerUsers.read);
router.get('/users/:id', controllerUsers.readID);
router.get('/users/nif/:id', controllerUsers.readNifID);
router.put('/users/bloq/:id', controllerUsers.block);
router.put('/users/desbloq/:id', controllerUsers.desblock);
router.delete('/users/:id', controllerUsers.deleteF);

router.get('/comodidadesEspaco/:id', controllerComodidadesEspaco.readID);
router.post('/comodidadesEspaco/', controllerComodidadesEspaco.save);
router.put('/comodidadesEspaco/:id', controllerComodidadesEspaco.update);
router.delete('/comodidadesEspaco/:id', controllerComodidadesEspaco.deleteF);


//SUGESTÃO ROUTE
router.post('/mail', controllerMail.sendSugestion);

//RECUPERAR PASSWORD
router.post('/forgotpassword', controllerGestorAdmin.forgotPassword);

router.get('/changePassword', function (req, res) {
    if (req.cookies.changeIdC)
        res.render('change-password.html');
    else
        res.redirect('/forbidden')
});
router.get('/changePassword/:id', function (req, res) {
    idCookie = req.sanitize('id').escape();
    res.clearCookie('changeIdC')
    res.clearCookie('auth')
    res.clearCookie('tipoC')
    res.clearCookie('idC')
    res.cookie('changeIdC', idCookie, { maxAge: 1000 * 60 * 5 });
    res.redirect('/changePassword')
});

//LOGIN AND LOGOUT ROUTES
router.post('/login', controllerGestorAdmin.signIn);

router.get('/logout', controllerGestorAdmin.signOut);

//TWITTER IMAGE ROUTE

router.get('/imagens/pplogotwitter', function(req, res) {
    res.sendFile(path.resolve('views/imagens/PPlogoTwitter.png'));
});



//HTML VIEWS ROUTES

router.get('/', function(req, res) {
    res.render('index.html');
});

router.get('/forbidden', function(req, res) {
    res.render('forbidden.html');
});

router.get('/404', function(req, res) {
    res.render('404.html');
});

router.get('/atividadesFO', function(req, res) {
    res.render('atividades.html');
});
router.get('/opinion', function(req, res) {
    res.render('opinion.html');
});
router.get('/about', function(req, res) {
    res.render('about.html');
});

router.get('/formulariosPartners', function(req, res) {
    res.render('formP.html');
});

router.get('/formulariosSponsors', function(req, res) {
    res.render('formS.html');
});

router.get('/forgotPassword', function(req, res) {
    res.render('forgot-password.html');
});

router.get('/login', function(req, res) {
    jtw.verify(req.cookies.auth, jtwConfig.secret, (err, authData) => {
        if (err) {
            res.render('login.html');
        } else {
            res.redirect('/dashboard')
        }
    });
});

router.get('/dashboard', function(req, res) {
    jtw.verify(req.cookies.auth, jtwConfig.secret, (err, authData) => {
        if (err) {
            res.redirect('/forbidden')
        } else {
            res.render('ar.html', { "nome": authData.nome });
        }
    });
});

router.get('/faturacao', function(req, res) {
    jtw.verify(req.cookies.auth, jtwConfig.secret, (err, authData) => {
        if (err) {
            res.redirect('/forbidden')
        } else {
            res.render('faturacao.html', { "nome": authData.nome });
        }
    });
});

router.get('/formulariosPartnersBO', function(req, res) {
    jtw.verify(req.cookies.auth, jtwConfig.secret, (err, authData) => {
        if (err) {
            res.redirect('/forbidden')
        } else {
            res.render('parceiros.html', { "nome": authData.nome });
        }
    });
});

router.get('/formulariosSponsorsBO', function(req, res) {
    jtw.verify(req.cookies.auth, jtwConfig.secret, (err, authData) => {
        if (err) {
            res.redirect('/forbidden')
        } else {
            res.render('formulariosp.html', { "nome": authData.nome });
        }
    });
});

router.get('/estatisticas', function(req, res) {
    jtw.verify(req.cookies.auth, jtwConfig.secret, (err, authData) => {
        if (err) {
            res.redirect('/forbidden')
        } else {
            res.render('charts.html', { "nome": authData.nome });
        }
    });
});

router.get('/gestoresEspacosBO', function(req, res) {
    jtw.verify(req.cookies.auth, jtwConfig.secret, (err, authData) => {
        if (err) {
            res.redirect('/forbidden')
        } else {
            res.render('listaparceiros.html', { "nome": authData.nome });
        }
    });
});

router.get('/administradoresBO', function(req, res) {
    jtw.verify(req.cookies.auth, jtwConfig.secret, (err, authData) => {
        if (err) {
            res.redirect('/forbidden')
        } else {
            res.render('Admin.html', { "nome": authData.nome });
        }
    });
});

router.get('/patrocinadoresBO', function(req, res) {
    jtw.verify(req.cookies.auth, jtwConfig.secret, (err, authData) => {
        if (err) {
            res.redirect('/forbidden')
        } else {
            res.render('patrocinadores.html', { "nome": authData.nome });
        }
    });
});

router.get('/editarPatrocinadores', function(req, res) {
    jtw.verify(req.cookies.auth, jtwConfig.secret, (err, authData) => {
        if (err) {
            res.redirect('/forbidden')
        } else {
            res.render('patrocinadoresedit.html', { "nome": authData.nome });
        }
    });
});

router.get('/jogos', function(req, res) {
    jtw.verify(req.cookies.auth, jtwConfig.secret, (err, authData) => {
        if (err) {
            res.redirect('/forbidden')
        } else {
            res.render('todosjogos.html', { "nome": authData.nome });
        }
    });
});


router.get('/utilizadoresBO', function(req, res) {
    jtw.verify(req.cookies.auth, jtwConfig.secret, (err, authData) => {
        if (err) {
            res.redirect('/forbidden')
        } else {
            res.render('todosusers.html', { "nome": authData.nome });
        }
    });
});


router.get('/perfil', function(req, res) { //aqui
    jtw.verify(req.cookies.auth, jtwConfig.secret, (err, authData) => {
        if (err) {
            res.redirect('/forbidden')
        } else {
            res.render('perfil.html', { "nome": authData.nome, "pass": authData.pass, "contacto": authData.contacto, "email": authData.email });
        }
    });
});

router.get('*', function(req, res) {
    res.redirect('/404')
});

module.exports = router;
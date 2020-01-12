const app = require('./server');
const router = require('./routes/main.route');
const cookieParser = require('cookie-parser');
const expressSanitizer = require('express-sanitizer');
const bodyParser = require('body-parser');
const models = require("./models/");
const expressValidator = require('express-validator');
app.use(expressSanitizer());
app.use(expressValidator());
app.use(cookieParser())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine');

}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
});

app.use('/', router);
module.exports = app;
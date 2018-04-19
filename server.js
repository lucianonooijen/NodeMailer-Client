const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const express = require('express');
const expressValidator = require('express-validator');
const hbs = require('hbs');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Later on, write the access logs to a separate file and only console.log non 200 codes
app.use(morgan('dev'));

// View engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Register handlebars partials
hbs.registerPartials(__dirname + '/views/partials');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

// Set route files
app.use('/api/mjml', require('./routes/api/mjml'));
app.use('/api/mailer', require('./routes/api/mailer'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

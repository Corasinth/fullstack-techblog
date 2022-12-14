const express = require ('express');
const session = require('express-session');
const routes = require ('./controllers');
const path = require('path')

// const exphbs = require('express-handlebars');
const {engine} = require('express-handlebars')
const sequelize = require ('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express ();
const PORT = process.env.PORT || 3001;
// const hbs = exphbs.screate({})

const sess = {
    secret: 'secret string',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars')

app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

sequelize.sync({force:false}).then(app.listen(PORT, () => {
    console.log (`App listening on port ${PORT}.`)
}))
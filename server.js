const express = reqiore ('express');
const routes = require ('controller');

const app = express ();
const PORT = process.env.PORT || 3001;

const sequelize = require ('./config/connection');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(routes);

sequelize.sync({force:false}).then(app.listen(PORT, () => {
    console.log (`App listening on port ${PORT}.`)
}))
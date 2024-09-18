const express = require('express');

const app = express();

const port = 5000;

const handlebars = require('express-handlebars').engine;

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
  layoutsDir: `${__dirname}/views/layouts`,
  extname: 'hbs',
  defaultLayout: 'index',
  partialsDir: `${__dirname}/views/partials`  
}));

app.use(express.static('public'));

const fakeApi = () => 'faker';

app.get('/', (req, res) => {
    res.render('main', {layout: 'index', proPlayer: fakeApi()});
});

app.listen(port, () => {
    console.log(`App listening to ${port}`);
});


// 3rd party packages
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log('In the middleware')
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('add-product')
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use((req, res, next) => {
    res.send('<h1>Moro!</h1>');
});

app.listen(3000);

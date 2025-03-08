// 3rd party packages
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware')
    next();
});

app.use('/users', (req, res, next) => {
    res.send('<h1>Users</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Moro!</h1>');
});

app.listen(3000);

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));
app.get('/:locale([a-z]{2})/*', (req, res) => res.sendFile(__dirname + '/dist/' + req.params.locale + '/index.html'));
app.get('/*', (req, res) => res.redirect('/it'));
app.listen(process.env.PORT || 4200);

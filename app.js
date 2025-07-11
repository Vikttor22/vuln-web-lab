const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', require('./routes/auth'));
app.use('/sqli', require('./routes/sqli'));
app.use('/ssrf', require('./routes/ssrf'));
app.use('/deser', require('./routes/deserialization'));
app.use('/pollution', require('./routes/pollution'));

app.listen(3000, () => console.log('Vuln Web Lab running on http://localhost:3000'));
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Configurar pasta de arquivos estáticos antes das rotas
app.use(express.static(path.join(__dirname, 'public')));

// Configurar view engine e views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rota raiz para o front principal
app.get('/', (req, res) => {
  res.render('index'); // Renderiza views/index.ejs
});

// Rotas das vulnerabilidades
app.use('/', require('./routes/auth'));
app.use('/sqli', require('./routes/sqli'));
app.use('/ssrf', require('./routes/ssrf'));
app.use('/deser', require('./routes/deserialization'));
app.use('/pollution', require('./routes/pollution'));

app.listen(3000, () => console.log('Vuln Web Lab running on http://localhost:3000'));
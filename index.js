const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const routes = require('./routes/index.route');

const app = express();

const SERVER_NAME = process.env.SERVER ? process.env.SERVER : "localhost";
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

dotenv.config();    // inits dotenv package so .env variables are accessible through the code

// form settings
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// views settings
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', routes);

app.use((req, res) => {
    res.status(404);
    res.render('pages/404', { title: "Page non trouvée" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
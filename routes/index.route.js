const express = require('express');
const dotenv = require('dotenv');

const router = express.Router();
const axios = require('axios');

dotenv.config();

const apiServer = process.env.API_SERVER;
const apiPort = process.env.API_PORT;
const serverAdd = `http://${apiServer}:${apiPort}`;

const headers = {
    headers: {
        "Content-Type" : "application/json"
    }
};

// quotes
router.get('/', async (req, res) => {
    const data = await axios.post(`${serverAdd}/quotes/random/one`, req.body, headers);
    const quote = data.data;
    const error = typeof quote === 'string' ? quote : null;
    res.render('pages/quote-random-one', { quote: quote, error: error, title: 'Random quote', showForm: false, formValues: null });
});

router.post('/', async (req, res) => {
    const body = req.body;
    const formValues = {};
    if(body?.minLength !== undefined) {
        formValues['minLength'] = parseInt(body.minLength);
    }
    if(body?.maxLength !== undefined) {
        formValues['maxLength'] = parseInt(body.maxLength);
    }
    if(body?.author !== undefined && body?.author) {
        formValues['author'] = body.author;
    }
    if(body?.tags !== undefined && body?.tags) {
        formValues['tags'] = body.tags;
    }
    const showForm = Object.keys(formValues).length !== 0 ? true : false;
    const data = await axios.post(`${serverAdd}/quotes/random/one`, body, headers);
    const quote = data.data;
    const error = typeof quote === 'string' ? quote : null;
    console.log(formValues)
    res.render('pages/quote-random-one', { quote: quote, error: error, title: 'Random quote', showForm: showForm, formValues: formValues });
});

module.exports = router;
require('dotenv').config();
const axios = require('axios');
const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());

const runApp = async () => {
    const res = await axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-28&sortBy=publishedAt&apiKey=${process.env.NA_KEY}`);
    return res.data
}

app.get('/', async (req, res) => {
    const resp = await axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-28&sortBy=publishedAt&apiKey=${process.env.NA_KEY}`);
    res.json(resp.data)
});

app.listen(3000, () => console.log('App started at port 3000'))
require('dotenv').config();
const axios = require('axios');

const runApp = async () => {
    const res = await axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-28&sortBy=publishedAt&apiKey=${process.env.NA_KEY}`);
    console.log(res.data);
}

runApp();
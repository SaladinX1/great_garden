const http = require('http');
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const path = require('path')
const server = http.createServer(app);
const appImages = require('./app');

dotenv.config();

const port = process.env.PORT || 5501;

server.listen(port, () => {
        console.log(`Server is listening on port ${port}`)    
})

const cors = require('cors')

app.use(cors());

app.use('/images', express.static(path.join(__dirname, '/images')));

app.use(appImages);



app.get('/healthy_app', (req, res) => {
    res.json({ status: 'ok' });
})


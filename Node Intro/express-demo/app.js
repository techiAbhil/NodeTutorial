const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    // res.write('abhlashd');
    console.log(req.params);
    res.status(200).json({
        name: 'abhilash',
    });
});

server.get('/:name', (req, res) => {
    // res.write('abhlashd');
    console.log(req.params);
    console.log(req.query);
    res.status(200).json({
        name: 'abhilash',
    });
});

server.get('/html', (req, res) => {
    res.send('<h1 style="background: red">This is just a test</h1>');
});

server.listen(5000, () => console.log('working on port 5000'));

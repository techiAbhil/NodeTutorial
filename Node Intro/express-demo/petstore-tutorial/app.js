const express = require('express');

require('express-async-errors');
const app = express();
const cors = require('cors');

const AuthRoutes = require('./auth-routes/auth-routes');
app.use(cors());
app.use(express.json());

app.use('/api/v1', AuthRoutes);

app.use((req, res) => res.send('Not found'));

app.listen(5002, () => {
    console.log('Server started @Port 5002');
});

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/index.js');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use('/api', routes);

// Routes
app.get('/', (req, res) => {
    res.send('Testing routes')
})

// mongodb
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connect to mongodb atlas'))
.catch((error) => console.log(error))

app.listen(port, () => console.log('Server listen on port', port));
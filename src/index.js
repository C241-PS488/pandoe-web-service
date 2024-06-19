// src/index.js
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const usersRoutes = require('./routes/usersRoutes');
const feedRoutes = require('./routes/feedRoutes');
const predictRoutes = require('./routes/predictRoutes')
const {port} = require('../src/config')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/feed', feedRoutes);
app.use('/api/', predictRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

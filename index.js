const express = require('express');
const index = require('./routes/index');
const app = express();
const PORT = process.env.PORT || '5000';


app.use('/api', index);

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));

module.exports = app;

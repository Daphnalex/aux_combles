const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var publicDir = require('path').join(__dirname,'/public');
const routes = require('./routes/app');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(publicDir));
app.use('/api', routes);

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});


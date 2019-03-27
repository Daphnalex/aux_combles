const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var publicDir = require('path').join(__dirname,'/public');
const routes = require('./routes/app');

const app = express();
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(cors());

app.use(express.static(publicDir));
app.use('/api', routes);

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});


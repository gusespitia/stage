const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || process || 8000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, function(){
    console.log('listening on port: ' + port);
});

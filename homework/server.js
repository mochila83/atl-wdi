const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 3000;

const pirateController = require('./controllers/pirates');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/pirates", pirateController);

app.set('view engine', 'hbs');

app.get('/', function(req,res){
    res.send('test index page');
});


app.listen(port, () => {
    console.log("Posting Pirates on port", port, "lolololol")
});
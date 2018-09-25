var express = require("express");

const app = express();

//set view engine pug
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index'); //render method to render express
})

app.get('/hello', (req, res) => {
    res.send("<h1>Hello Javascript Developer</h1>"); //sends string to client
})


app.listen(3000, () => {
    console.log("server restarted");
});


const express = require("express");
const { clearScreenDown } = require("readline");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
const port = 3000;
const calculation = require("./calculate");
//const {sum}= require("./calculate");


app.get('/calculate', (req, res) => {
    //console.log(calculation.sum(2, 5));
    console.log(calculation.login({ "username": "PATTU" }));
})

app.post('/login', (req, res) => {
    console.log(req.body);
    res.status(200).send("Hello Node");
})

app.get('/get-hello', (req, res) => {
    //req.params.name(PRIME)
    //console.log(req.query['name']);
    const num1 = parseInt(req.query['first']);
    const num2 = parseInt(req.query['second']);
    const sum = num1 + num2;
    console.log(sum);
    //console.log(req.params['name']);
    res.status(200).send('Hello World')

})
app.get('/per-hello', (req, res) => {
    //function sum()
    //req.params.name(PRIME)
    //console.log(req.query['name']);
    const num1 = parseInt(req.query['first']);
    const num2 = parseInt(req.query['second']);
    sum(num1, num2);
    // console.log(sum);
    // //console.log(req.params['name']);
    res.status(200).send('Hello World')

})

function sum(a, b) {
    // const num1 = parseInt(req.query['first']);
    // const num2 = parseInt(req.query['second']);
    const add = a + b;
    console.log(add);
}


app.post('/hello', (req, res) => {
    console.log(req.body);
    res.status(200).send('Hello World')
})


app.listen(port, () => {
    console.log(`Example listening on ${port}`)
})
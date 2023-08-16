const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// displaying the given data on the given port

app.get('/person', () => {
    console.log(` 
        {
            name: "Marianna",
            surname: "Tumanyan"
        },
        {
            name: "David",
            surname: "Tumanyan"
         },
        {
            name: "Anahit",
             surname: "Tumanyan"
        }`);
})
app.listen(port, () => {
    console.log(` Server is running on port 3000`);
})


// displaying the given message on the given port

app.get('/', (req, res) => {
    res.json({message:'Hello!!!'})
})
app.listen(port, () => {
         console.log(` Server is running on port 3000`);
})

// working with the Postman and sending the given request

app.post('/person', (req, res) => {
    console.log(req);
    res.send('Hello!!!')
})
app.listen(port, () => {
    console.log(` Server is running on port 3000`);
})

// sending a post via Postman 

app.use(bodyParser.json());

app.post('/person', (req, res) => {
    const arr = [];
    const { name, surname } = req.body
    arr.push({
        name, surname
    })
    console.log(arr);
    res.send(JSON.stringify(arr, null, 2))
})
app.listen(port, () => {
    console.log(`Server working on port ${port}`);
})
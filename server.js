/*const express = require('express')

const app = express()


let encodeUrl = express.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', encodeUrl, (req, res) => {
    console.log('Form request:', req.body)
    res.send("Tere, " + req.body.input)
})

app.listen(8080)

const port = 8080
const host = '127.0.0.1'
console.log(`Listening at http://${host}:${port}`)**/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res
        .status(200)
        .send('Hello server is running')
        .end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
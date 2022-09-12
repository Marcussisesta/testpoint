const express = require('express');
const app = express();


let encodeUrl = express.urlencoded({ extended: false });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.post('/', encodeUrl, (req, res) => {
    console.log('Form request:', req.body)
    res.send("Tere, " + req.body.input)
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
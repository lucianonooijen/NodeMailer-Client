const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

// Later on, write the access logs to a separate file and only console.log non 200 codes
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(port, () => console(`Server listening on port ${port}`));


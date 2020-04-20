const express = reqire('express');
const app = express();

app.use( (req, res) => {
    res.send('Hello');
});

app.listen(3000);
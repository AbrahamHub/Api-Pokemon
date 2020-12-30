const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

app.get('/team', () => {

});

app.post('/team/pokemons', () => {

});

app.delete('/team/pokemons/:pokeid', () => {

});

app.put('/team', () => {

});
app.listen(port, () => {
    console.log('Server started at port 3000');
});

exports.app = app;
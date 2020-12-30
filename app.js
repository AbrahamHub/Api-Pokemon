const express = require('express');
const app = express();
const port = 3000;

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
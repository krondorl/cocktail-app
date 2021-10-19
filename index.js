const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/cocktail', (req, res) => {
    let apiMode = req.query.mode;
    let searchName = req.query.name;

    if (apiMode === 'random') {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(response => res.json(response.data))
            .catch(err => console.log(err));
    } else if (apiMode === 'search' && searchName.length > 0) {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + searchName)
            .then(response => res.json(response.data))
            .catch(err => console.log(err));
    }
});

// Handles any requests that don't match the ones above
// app.get('*', (req, res) =>{
//     res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log('Cocktail app is listening on port ' + port);
const router = require('express').Router();
//const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    console.log("notes.js")
    let results = notes;
    res.json(results);
});

/* router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
}); */

/* router.post('/animals', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = animals.length.toString();

    // if any data in req.body is incorrect, send 400 error back
    if (!validateAnimal(req.body)) {
        res.status(400).send('The animal is not properly formatted.');
    } else {
        const animal = createNewAnimal(req.body, animals);
        res.json(animal);
    }
}); */

module.exports = router;
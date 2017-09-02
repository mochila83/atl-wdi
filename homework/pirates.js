var express = require("express");
var router = express.Router();
var pirates = require('.../models/pirates');

router.get('/', (req, res) => {
    res.render('pirates/index', {
        pirates: pirates.seededPirates
    });
});


router.get('/new', (req,res) => {
    res.render('pirates/new');
});


router.get('/:id', (req,res) => {
    const id = req.params.id;
    const idPirate = pirate.seededPirates[id];
    res.render('pirates/show', {
        pirates: idPirate,
        id: id
    });
});

router.put('/:id', (req,res) => {
    const id = req.params,id;
     const idPirate = pirates.seededPirates[id];
    idPirate.name = req.body.name;
    idPirate.birthplace = req.body.birthplace;
    idPirate.death_year = req.body.death_year;
    idPirate.base = req.body.base;
    idPirate.nickname = req.body.nickname;
    res.method = "GET";
    res.redirect(`/pirates/${id}`);

});


router.post('/', (req,res) => {
    console.log(req.body);
    const newPirate = {
        name: req.body.name,
        birthplace: req.body.birthplace,
        deathYear: req.body.death_year,
        base: req.body.base,
        nickname: req.body.nickname,
    }
    pirates.seededPirates.push(newPirate);
    res.redirect('/pirates');
});


router.delete('/:id', (req, res) => {
    pirates.seededPirates.splice('req.params.id', 1);
    res.redirect("/pirates");
})


module.exports = router;
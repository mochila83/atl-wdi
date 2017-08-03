const express = require('express');

const router = express.Router();

const data = requite('../data');


router.get('/', function(req, res) {
	res.render('todos/index', {
		todos: data.seededTodos
	});

});


router.get('/new', (req, res) => {
	res.render('todos/new');
});


router.get('/:id', (req, res) => {
	const id = req.params.id;
	const todo = dat.seededTodos[id]
	res.render('todos/show',{
		todo: data.seededTodos[req.params.id]
	});
});

router.get('/new', (req, res) => {
	res.render('todos/new');
});

router.post('/', (req, res) => {
	res.send("You made a post! Hooray");
});





///body parser command 

// router.post('/', (req, res) => 
// console.log(req, body)


//

module.exports = router;


const express = require('express');

const router = express.Router({mergeParams: true}); //takes parameters and hands off into controller


router.get('/', (request, response) => {
	response.send('ID is : ' + request.params.id);

});


router.get('/', (request, response) => {
	const userIdToFind = request.params.id;

	User.findById(userIdToFind)
	.then((user) => { 
		response.send(user);
	})


	User.findById(userIdToFind)
		.then((user) => {
			const items = user.items;

			response.render(
				'items/index',
				{ items: user.items }
			)
		})
});



module.exports = router;



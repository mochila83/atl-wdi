var Schema = require("../db/schema.js");
var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;


router.get('/', () =>{
	StudentModel.find({})
	.exec(function(err, students){
		if(err) {
			console.log(err);
			return;
		}

		response.render('students',{
			students: students
		})


		students.forEach(function (student){
			console.log(student);
		});
	});
});


router.get('/:id', (request, response) => {x
	const studentId = request.params.id;


	StudentModel.findById(studentId)
		.then((student)=>{
			request.render('students/show', {
				student: student
			})

		})

		.catch((error) => {
				console.log(error)
			});
		});

	

	//request.render('students/show'. {
	//	student: student
//	})


}
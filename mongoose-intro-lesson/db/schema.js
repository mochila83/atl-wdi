
// in the db/schema.js

var mongoose = require('mongoose');

// Use ES6 native promises. We are specifying a Promise library to avoid a depreciation warning in the console.

mongoose.Promise = global.Promise;


// Now that we are connected, let's save that connection to the database. 


var db = mongoose.connection;

db.on('error', function(err){
	console.log(err);
});

db.once('open', function(){
	console.log("database has been connected!");
});


db.close();



const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
	title: {
	type: String
	required: true,
	unique: true,
	},
	unit: String
});

var ProjectSchema = new Schema({
	title: String,
	unit: String,
});

const HomeworkAssignment = new Schema({
	title: String,
	dueDate: Date,
});

const StudentSchema = new Schema({
	name: String,
	age: Number,
	email: {
		required: true,
		match: /.+\@.+\..+/
	},
	level:{
		enum: ['apprentice', 'journeyman', 'master']
	},	
	projects: [ProjectSchema]
});

var ProjectModel = mongoose.model("Project", ProjectSchema);
var StudentModel = mongoose.model("Student", StudentSchema);


var anna = new StudentModel({ name: "Anna", age: 28 });
var project1 = new ProjectModel({ title: "memory game", unit: "JS"});

anna.projects.push(project1);

anna.save(function(err, student){
	if (err) {
		console.log(student + " was saved to our db!");
	}
});


module.exports = {
	StudentModel: StudentModel,
	ProjectModel: ProjectModel,
	HomeworkAssignment : HomeworkAssignmentModel,
};



console.log(StudentModel);





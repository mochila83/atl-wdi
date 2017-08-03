console.log('tamagotchi file is loaded');

<<<<<<< HEAD
var Tamagotchi = function(name, creatureType) {
	this.name =name;
	this.creatureType = creatureType;
	this.foodInTummy = 10;
	this.restedness = 10;
	this.health = 10;
	this.cry = function() {
		this.foodInTummy--;
		console.log("WAAAH!!!!!");
		console.log(this.name + ' has current food in tummy = ' + this.foodInTummy);
	};
	this.puke = function(){
		this.health--;
		console.log('Bleeeeh! Sick!!!!!');
		console.log(this.name +' has current health = ' + this.health);
	};
	this.yawn = function(){
		this.restedness--;
		console.log('Yaaawwwn! So tired');
		console.log(this.name + ' has current restedness = ' + this.restedness);
	};
	this.start = function(){
		console.log("Starting " + this.name);
		var self = this;
		this.hungerTimer = setInterval(function() {
			self.cry();
		}, 6000);
		this.yawnTimer = setInterval(function() {
			self.yawn();
		} 10000);
		this.sickTimer = setInterval(function() {
			self.puke();
		}, 25000);
	};
	this.stop = function(){
		console.log("stopping " + this.name);
		clearInterval(this.hungerTimer);
		clearInterval(this.yawnTimer);
		clearInterval(this.sickTimer);
	};
};

//your constructor function here
=======
//your class declaration here
>>>>>>> 4739f6189c4fbb8355cad28055c4edf5fda57bca


//create new Tamagotchis


//test out your Tamagotchies below via console.logs

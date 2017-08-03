import React, { Component } from 'react';

const crazy = true;

class Profile extends Component {
	render () {
		return (
			<div>
			<img src={crazy ? "http://www.placecage.com/200/300" : "http://www.placecage.com/200/300"} />
			<h1>Nic Cage</h1>
			<h3>Full Stack Developer</h3>
			</div>
		});
	}
}

export default Profile;
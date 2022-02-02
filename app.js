function toggleMenu() {
	const menu = document.getElementById('myLinks');
	if (menu.style.display === 'block') {
		menu.style.display = 'none';
	} else {
		menu.style.display = 'block';
	}
}

function alertProject1() {
	console.log('Project 1 Alert Engaged');
	alert(
		'Project Name: Dog Walker App\nProject Status: Completed\nProject Details: Sign up as a dog walker or dog owner and match with a walker/owner\nTools: Mongo, Mongoose, MongoDB, Node, React, JSX, & Express'
	);
}

function alertProject2() {
	console.log('Project 2 Alert Engaged');
	alert(
		'Project Name: Dungeons & Dragons Spell List\nProject Status: Completed\nProject Details: Review all D&D spells and descriptions via API call\nTools: Node, React, JSX, & Express'
	);
}

function alertPending1() {
	console.log('Pending Project 1 Alert Engaged');
	alert(
		'Project Name: Wizarding Schools Review Page\nProject Status: Pending\nProject Details: Sign up as a school Headmaster to upload school information and respond to reviews, or sign up as a student to leave a school review.\nTools: Node, React, JSX, & Express'
	);
}

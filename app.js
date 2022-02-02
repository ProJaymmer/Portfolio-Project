function toggleMenu() {
	const menu = document.getElementById('myLinks');
	if (menu.style.display === 'block') {
		menu.style.display = 'none';
	} else {
		menu.style.display = 'block';
	}
}

function alertProject1() {
	alert(
		'Project Name: Dog Walker App\nProject Status: Completed\nProject Details: Sign up as a dog walker or dog owner and match with a walker/owner\nTools: JavaScript, React, Express, MongoDB'
	);
}

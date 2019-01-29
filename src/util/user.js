function processLogin(username, password) {
	if (!username) {
		return {
			errror: 'No username provided!'
		};
	}

	if (!password) {
		return {
			errror: 'No password provided!'
		};
	}

	if (username === 'admin' && username === 'password') {
		return {
			success: 'Success'
		}
	}
}

export default processLogin;
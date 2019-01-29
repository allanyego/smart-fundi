import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			remember: false
		};

		this.onNameChange = this.onNameChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onRememberChange = this.onRememberChange.bind(this);
	}

	onNameChange(e) {
		this.setState((state, props) => ({
			username: e.target.value
		}));
	}

	onPasswordChange(e) {
		this.setState((state, props) => ({
			password: e.target.value
		}));
	}

	onRememberChange() {
		this.setState((state, props) => ({
			remember: !state.remember
		}));
	}

	render() {
		return(
			<form>
			  <div className="form-group">
			    <label htmlFor="username">Username</label>
			    <input type="email" className="form-control form-control-sm" id="username" 
				    aria-describedby="emailHelp" placeholder="Enter username"
				    value={this.state.username}
				    onChange={this.onNameChange}/>
			    <small id="emailHelp" className="form-text text-muted">We'll never share your email 
				    with anyone else.</small>
			  </div>
			  <div className="form-group">
			    <label htmlFor="exampleInputPassword1">Password</label>
			    <input type="password" className="form-control form-control-sm" id="password" 
				    placeholder="Password"
				    value={this.state.password}
				    onChange={this.onPasswordChange}/>
			  </div>
			  <div className="form-group form-check">
			    <input type="checkbox" className="form-check-input" id="remember"
				    value={this.state.remember}
				    onChange={this.onRememberChange}/>
			    <label className="form-check-label" htmlFor="remember">Keep me logged in</label>
			  </div>
			  <button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

export default Login;
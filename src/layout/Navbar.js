import React from'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.toggleView = this.toggleView.bind(this);
	}

	toggleView(flag) {
		const login = this.props.login,
			self = this;

		return function(e) {
			if (flag === login) {
				return;
			} else {
				const el = e.target;
				const sibling = el.nextSibling || el.previousSibling;

				el.className = "nav-item nav-link active";
				sibling.className = "nav-item nav-link";

				self.props.onViewChange();
			}
		}
	}

	render() {
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			  <a className="navbar-brand" href="/">SmartFundi</a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" 
				  data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
				  aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			    <div className="navbar-nav">
			      <Link className="nav-item nav-link" to="/login">
				      Log in <span className="sr-only">(current)</span></Link>
			      <Link className="nav-item nav-link" to="/register">
				      Register</Link>
			    </div>
			  </div>
			</nav>
		);
	}
}

export default Navbar;
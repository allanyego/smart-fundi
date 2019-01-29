import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return(
			<form>
			  <div className="form-row">
				  <div className="form-group col-md-6">
				      <label htmlFor="name">First name</label>
				      <input type="text" className="form-control form-control-sm"
					      value="firstName" placeholder="First name" />
				   </div>
				   <div className="form-group col-md-6">
				      <label htmlFor="name">Last name</label>
				      <input type="text" className="form-control form-control-sm"
					      value="lastName" placeholder="Last name" />
				   </div>
		    </div>
		    <div className="form-group">
		      <label htmlFor="email">Email</label>
		      <input type="email" className="form-control form-control-sm" id="email" placeholder="Email" />
		    </div>
		    <div className="form-row">
		      <div className="form-group col-md-6">
			      <label htmlFor="password">Password</label>
			      <input type="password" className="form-control form-control-sm" id="inputPassword4" placeholder="Password" />
			    </div>
			    <div className="form-group col-md-6">
			      <label htmlFor="repeatpassword">Repeat password</label>
			      <input type="password" className="form-control form-control-sm" id="repeatpassword" placeholder="Password" />
			    </div>
		    </div>
			  <div className="form-group">
			    <label htmlFor="address">Address</label>
			    <input type="text" className="form-control form-control-sm" id="address" placeholder="1234 Main St" />
			  </div>
			  <div className="form-group">
			    <label htmlFor="address2">Address 2</label>
			    <input type="text" className="form-control form-control-sm" id="address2" placeholder="Apartment, studio, or floor" />
			  </div>
			  <div className="form-row">
			    <div className="form-group col-md-6">
			      <label htmlFor="inputCity">City</label>
			      <input type="text" className="form-control form-control-sm" id="inputCity" />
			    </div>
			    <div className="form-group col-md-4">
			      <label htmlFor="state">State</label>
			      <select id="state" className="form-control form-control-sm">
			        <option selected>Choose...</option>
			        <option>...</option>
			      </select>
			    </div>
			    <div className="form-group col-md-2">
			      <label htmlFor="zip">Zip</label>
			      <input type="text" className="form-control form-control-sm" id="zip" />
			    </div>
			  </div>
			  <button type="submit" className="btn btn-primary">Sign in</button>
			</form>
		);
	}
}

export default Register;
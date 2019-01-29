import React from 'react';

class Tester extends React.Component {
	render() {
		const text = this.props.match.path;
		return(
			<div className="card">
			 Route matched {text}
			</div>
		);
	}
}

export default Tester;
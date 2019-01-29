import React from 'react';

class Column extends React.Component {
	render() {
		return (
			<div className="col">
				{this.props.children}
			</div>
		);
	}
}

export default Column;
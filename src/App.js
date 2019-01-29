
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Container from './layout/Container';
import Column from './layout/Column';
import Row from './layout/Row';
import Navbar from './layout/Navbar';
import Login from './layout/forms/Login';
import Register from './layout/forms/Register';
import Tester from './route-test';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginView: true
    };

    // Bind handler
    this.changeView = this.changeView.bind(this);
  }

  changeView() {
    // Change view flag
    this.setState((prevState, currProps) => ({
      loginView: !this.state.loginView
    }));
  }

  render() {
    const view = this.state.loginView ?
      <Login /> :
      <Register />;

    return (
      <Container>
        <Navbar login={this.state.loginView}
          onViewChange={this.changeView}/>
        <Row>
          <Column>
            {view}
          </Column>
          <Column>
            <h3 className="heading-3">You smart online craftee..</h3>
          </Column>
        </Row>
        <Route path="/login" component={Tester} />
        <Route path="/register" component={Tester} />
      </Container>
    );
  }
}

export default App;

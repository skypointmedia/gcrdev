import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { logoutUser } from "../actions";
import Layout from "./layouts/Layout";

class Home extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  render() {
    const { isLoggingOut, logoutError } = this.props;

    return (
      <Layout onLogOut={this.handleLogout}>
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route
            exact
            path="/dashboard"
            component={() => <div>Dashboard</div>}
          />
        </Switch>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}

export default connect(mapStateToProps)(Home);

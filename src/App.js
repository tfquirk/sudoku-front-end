import React, { Fragment } from "react";

// connect to Redux state
import { connect } from "react-redux";

// import ability to declare routes
import { Route } from "react-router-dom";

// import api call to get all available puzzles
import { fetchBoards } from "./Actions/Apis/fetchBoards";

// import components
import Homepage from "./Pages/Homepage";

class App extends React.Component {
  componentDidMount() {
    this.props.getBoards();
  }

  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Homepage} />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    boards: state.boards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBoards: () => fetchBoards(dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

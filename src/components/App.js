import { connect } from "react-redux";
import React from "react";

import { increment, decrement } from "../actions/index";

class App extends React.Component {
  render() {
    const props = this.props;
    // props.increment => object
    console.log(props.increment);
    return (
      <>
        <div>count: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ value: state.count.value });

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

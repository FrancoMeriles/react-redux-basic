import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import * as actionType from "../../store/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCount}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecreaseCount}
        />
        <CounterControl
          label="Agregar 5"
          clicked={() => this.props.addCount(5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.subtractCount(5)}
        />
        <hr />
        <button onClick={() => this.props.onStoreResutl(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResult.map(result => (
            <li
              key={result.id}
              onClick={() => this.props.onDeleteResult(result.id)}
            >
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResult: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCount: () => dispatch({ type: actionType.INCREMENT }),
    onDecreaseCount: () => dispatch({ type: actionType.DECREMENT }),
    addCount: count => dispatch({ type: actionType.ADD, value: count }),
    subtractCount: c => dispatch({ type: actionType.SUBTRACT, value: c }),
    onStoreResutl: r => dispatch({ type: actionType.STORE_RESULT, result: r }),
    onDeleteResult: c => dispatch({ type: actionType.DELETE_RESULT, elId: c })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

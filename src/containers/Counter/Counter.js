import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import * as actionType from "../../store/actions/actionsTypes";

import * as actionsCreator from "../../store/actions/index";

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
    onIncrementCount: () => dispatch(actionsCreator.increment()),
    onDecreaseCount: () => dispatch(actionsCreator.decrement()),
    addCount: c => dispatch(actionsCreator.add(c)),
    subtractCount: c => dispatch(actionsCreator.subtract(c)),
    onStoreResutl: r => dispatch(actionsCreator.storeResult(r)),
    onDeleteResult: id => dispatch(actionsCreator.deleteResult(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

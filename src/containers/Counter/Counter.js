import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Counter.css';

class Counter extends Component {
  render() {
    return (
      <div className={'Counter'}>
        <h1>{this.props.counter}</h1>
        <button onClick={this.props.increaseCounter}>Increase</button>
        <button>Decrease</button>
        <button onClick={this.props.increaseCounterBy}>Increase by 5</button>
        <button>Decrease by 5</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {counter: state.counter};
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch({type: 'INCREMENT'}),
    increaseCounterBy: () => dispatch({type: 'INCREMENT_BY', value: 5})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
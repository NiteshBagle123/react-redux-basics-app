import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { counterActions } from '../store/counterSlice';
import classes from './Counter.module.css';

const Counter = () => {
  const counterState = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment(1))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement(1));
  }
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterState}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler = () => {
//     this.props.increment()
//   }

//   decrementHandler = () => {
//    this.props.decrement();
//   }
  
//   toggleCounterHandler = () => {
//     this.props.toggle();
//   };

//   render() {  
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'INCREMENT', value: 1 }),
//     decrement: () => dispatch({ type: 'DECREMENT', value: 1 }),
//     toggle: () => dispatch({ type: 'TOGGLE' })
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);


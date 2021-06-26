// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import authSlice from '../store/authSlice';

const store = configureStore({
    reducer: {
        counter: counterSlice,
        auth: authSlice
    }
});

export default store;

// const counterReducer = (state = { counter: 0 }, action) => {
//     if(action.type === 'INCREMENT'){
//         return {
//             counter: state.counter + action.value
//         }
//     }

//     if(action.type === 'DECREMENT'){
//         return {
//             counter: state.counter - action.value
//         }
//     }

//     if(action.type === 'TOGGLE'){
//         return {
//             counter: -state.counter
//         }
//     }
    
//     return state;
// }

// const store = createStore(counterReducer);

// export default store;
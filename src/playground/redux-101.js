import { createStore } from 'redux';

// Action generators - functions that return action object
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    //incrementBy: incrementBy
    incrementBy // simplified
})   

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy // simplified
})   

const setCount = ({ count = 1 } = {}) => ({
    type: 'SET',
    count // simplified
}) 

const resetCount = () => ({
    type: 'RESET',
}) 

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count : state.count + action.incrementBy
            };
        case 'DECREMENT':     
            return {
                count : state.count - action.decrementBy
            };    
        case 'RESET':
            return {
                count : 0
            };
        case 'SET':
            return {
                count : action.count
            };        
        default:
            return state;
    }
};

// create redux store (state container) 
// a default value is set
// do not change state or action
const store = createStore(countReducer);

// gets called every time the store changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


// Action: object that get sent to the store
// increment, decrement, reset - change the store over time
store.dispatch(incrementCount());

// to unsubscribe just run function again
//unsubscribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy:10 }));

store.dispatch(setCount({count: 101}));
    
import { createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

export default () => {
    // Store creation with multiple reducers
    const store = createStore(
        combineReducers({ // create an array an put it into expenses object
            expenses: expensesReducer,
            filters: filterReducer
        })
    );
    
    return store;
}
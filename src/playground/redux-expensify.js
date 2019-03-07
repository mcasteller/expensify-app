import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD Expense action
const addExpense = (
    { 
        description = '',
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense : {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE Expense action
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// Set Text filter
const setTextFilter = ( text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

// Define default for expenses array reducer
const expensesReducerDefaultState = [];

// Expenses array reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, //ES6 spread operator
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id !== action.id
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense === action.id) {
                    return { // object spread operator
                        ...expense, 
                        ...action.updates // override pass down properties
                    }
                } else {
                    return expense;
                }
            });            
        default:
            return state;
    }
};

// filter reducer default state
const filterReducerDefaultState = ({
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate:  undefined
});

// Filters reducer
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }  
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }        
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }        
        default:
            return state;
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, filters) => {
    return expenses;
}

// Store creation with multiple reducers
const store = createStore(
    combineReducers({ // create an array an put it into expenses object
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(store.getState())
})

// Add expenses
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

// Remove one expense
store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount()); // amount
store.dispatch(sortByDate());   // date

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());

store.dispatch(setEndDate(1250));
store.dispatch(setEndDate());


const demoState = {
    expenses: [{ // array of objects
        id: 'dsds',
        description: 'jan rent',
        note: 'this was the final payment for that address',
        amount: 54500, // pennies
        createdAt: 0 // Timestamp
    }],
    filters: { //filters for users to apply
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}

const user = {
    name: 'Jan',
    age: 24
}

// Requires babel configuration
console.log({
    ...user,
    location: 'Philadelphia',
    age: 27
})
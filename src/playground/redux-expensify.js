import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';



// Get visible expenses
// expenses: complete array


store.subscribe(() => {
    const state = store.getState(); // entire expenses array + all filters
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

// DISPATCH ACTIONS
// Add expenses
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000  }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// Remove one expense
//store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// Edit expense two
//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// Set Filter object
store.dispatch(setTextFilter('ffe'));
//store.dispatch(setTextFilter());

//store.dispatch(sortByAmount()); // amount
//store.dispatch(sortByDate());   // date

store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());

//store.dispatch(setEndDate(1250));
//store.dispatch(setEndDate());


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
/*console.log({
    ...user,
    location: 'Philadelphia',
    age: 27
})
*/
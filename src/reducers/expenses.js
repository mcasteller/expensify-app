// Define default for expenses array reducer
const expensesReducerDefaultState = [];

// Expenses array reducer
// Returns new expenses array
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

export default expensesReducer;
import uuid from 'uuid';


// ACTION GENERATORS
// ADD Expense action
export const addExpense = (
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
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
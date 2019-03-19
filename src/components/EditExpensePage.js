import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log(expense);
                    props.dispatch(editExpense(props.expense.id, expense)); // add data to redux store
                    props.history.push('/'); // switch over the desired page     
                }}
            />
            <button onClick={(e) => {
                // need to update the store in here
                props.dispatch(removeExpense(props.expense));
                props.history.push('/'); // switch over the desired page     
            }}>
                Remove
            </button>
        </div>
    )
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    };
}

export default connect(mapStateToProps)(EditExpensePage);
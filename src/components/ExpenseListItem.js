import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ( {dispatch, id, description, amount, createdAt} ) => {
    return (
        <div>
            <Link to={`/edit/${id}`} >
                <h3>{description}</h3>
            </Link>
            <p>{amount}</p>
            <p>{createdAt}</p>
            <button onClick={(e) => {
                // need to update the store in here
                dispatch(removeExpense( {id} ));
            }}>
                Remove
            </button>
        </div>
    )};

// this give us access to dispatch function
export default connect()(ExpenseListItem);
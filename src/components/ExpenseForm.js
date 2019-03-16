import React from 'react';
import moment from 'moment'; // similar to JS Date lib
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(), // provides an initial value
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
            const description = e.target.value;
            this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
            const note = e.target.value;
            this.setState(() => ({ note }));
    };

    onAmountChange = (e) => {
            const amount = e.target.value;
            // first condition enable user to delete the field value
            if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
                this.setState(()=> ({
                    amount
                }))
            }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => {
                createdAt
            })
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => {
            calendarFocused: focused
        })
    }

    // We ended calling the onSubmit from props
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            // Set error state, please provide description and amount
            this.setState(() => ({error: 'Please provide description and amount'}))
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        placeholder='Description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type='text'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder='Add a note or your expense (optional)'
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        >
                    </textarea>    
                    <button>
                        Add Expense
                    </button>
                </form>
            </div>
        )
    };
}
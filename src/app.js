import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // provides the store for all components
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const store = configureStore();

// Add expenses
store.dispatch(addExpense({ description: 'Water Bill', amount: 400, createdAt: 1000  }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 200, createdAt: 2000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 300, createdAt: 3000  }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

// define the store available for all components
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));
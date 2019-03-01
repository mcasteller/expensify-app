
// Button click handlers
const addOne = () => {
    count ++;
    renderCounterApp();
}
const minusOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count = 0;
    renderCounterApp();
}

let count = 0;

const appRoot = document.getElementById('app');

// Render HTML in screen
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} >+1</button>
            <button onClick={minusOne} >-1</button>
            <button onClick={reset} >reset</button>
    
        </div>
    )

    ReactDOM.render(templateTwo, appRoot);
}

// Run at page load
renderCounterApp();
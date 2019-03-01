console.log('App.js is running');

const app = {
    title: 'Indecision Apps',
    subtitle: 'This is some Info',
    options: []
}

// Form Events: Look events in synthetic Events
const onFormSubmit = (e) => {
    e.preventDefault(); // stop full page refresh

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderForm();
    }
}

const onRemoveAll = () => {
    app.options = [];
    
    renderForm();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
}

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderForm = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What Shoud I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>Option: {option}</li>)            
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderForm();
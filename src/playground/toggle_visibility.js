console.log('App.js is running');

const app = {
    title: 'Visibility Toggle',
    visible: false,
    visibleText: 'Hey, These are some details you can see'
}


const onToggleDetails = () => {
    app.visible = !app.visible;
    renderForm();
}

const appRoot = document.getElementById('app');

const renderForm = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onToggleDetails}>{app.visible ? 'Hide details' : 'Show details'}</button>
            {app.visible && <p>{app.visibleText}</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderForm();
console.log('App.js is running');

var app = {
    title: 'Indecision App',
    subtitle: 'This is some Info',
}

// JSX - Javascript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
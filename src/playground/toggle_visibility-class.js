
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.onToggleDetails = this.onToggleDetails.bind(this);     
        this.state = {
            visible: false
        };
    }

    onToggleDetails() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        })
    }

    render() {
        return (
            <div>
                <h1>Title</h1>
                <button onClick={this.onToggleDetails}>{this.state.visible ? 'Hide details' : 'Show details'}</button>
                {this.state.visible && <p>He aqui</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
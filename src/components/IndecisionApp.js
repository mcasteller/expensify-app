import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            options: props.options,
            selectedOption: undefined
        }
    }

    // Lifecycle methods
    // fired when component mounts into HTML
    componentDidMount() {
        // handle JSON error parsing
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({options}));
            }
        } catch (e) {

        }
    }

    // fired when component changes
    // props or state values change
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    
    // fired when component is removed from browser
    componentWillUnmount() {

    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option )
        }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        this.setState(() => ({
            selectedOption: this.state.options[randomNum]
        }))
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        }      
     
        this.setState((prevState) => ( { options: prevState.options.concat([option])} ));
    }

    closeModal() {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }

    render () {
        const title = 'Indecision';
        const subtitle = 'Put your hands in a CPU';     

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                        handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                        selectedOption={this.state.selectedOption}
                        closeModal={this.closeModal}/>
                </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}
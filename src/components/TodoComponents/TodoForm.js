import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            todoText: ''
        };
    }

    handleChanges = e => {
        // Update state with each keystroke

        this.setState({
            todoText: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.todoText);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>


                <input
                    type="text"
                    name="task"
                    placeholder="New task here..."
                    value={this.state.todoText}
                    onChange={this.handleChanges}
                    />
                    <button> Add </button>
            </form>
        );
    };

}

export default TodoForm;
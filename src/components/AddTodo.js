import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        this.props.getTitle(this.state.title);
        this.setState({title: ' '});
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={formStyle}>
                <input  type = 'text'
                        name = 'title'
                        placeholder = 'Add Task'
                        style={inputStyle}
                        value={this.state.title}
                        onChange={this.onChange}/>
                <input  type = 'submit'
                        name = 'submit'
                        style={btnStyle} />
            </form>
        )
    }
}

const formStyle = {
    display: 'flex'
}
const inputStyle = {
    flex: '10'
}
const btnStyle = {
    flex: '1',
    backgroundColor: '#666',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
}

export default AddTodo

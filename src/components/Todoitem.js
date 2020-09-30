import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle = () => {
        return {
            backgroundColor :   '#f4f4f4',
            borderBottom    :   '.5px #ccc dotted',
            padding         :   '2px',
            textDecoration  : this.props.item.complete ? 
            'line-through' : 'none'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={
                        this.props.getID.bind(this, this.props.item.id)}/> 
                    {'  '}
                    {this.props.item.task}
                    <button style   = {btnStyle}
                            onClick = {
                                this.props.deleteID.bind(this, this.props.item.id)}   
                        >x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    float           :   'right',
    backgroundColor :   '#f40000',
    borderRadius    :   '50%',
    padding         :   '2px 6px',
    border          :   'none',
    color           :   'white',
    cursor          :   'pointer'
}

Todoitem.propTypes = {
    item: PropTypes.object.isRequired
}


export default Todoitem

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
                    <input type='checkbox'/> {'  '}
                    {this.props.item.task}
                </p>
            </div>
        )
    }
}

Todoitem.propTypes = {
    item: PropTypes.object.isRequired
}


export default Todoitem

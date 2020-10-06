import React from 'react';
import  {Link} from 'react-router-dom';

export default function Header(){
    return (
        <header style={headStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to='/'> Home </Link> 
            | 
            <Link style={linkStyle} to='about'> About </Link>
        </header>
    )
}

const headStyle = {
    textAlign  : 'center',
    backgroundColor : '#333',
    color           : 'white',
    padding         : '5px'
}

const linkStyle = {
    color           : 'white',
}
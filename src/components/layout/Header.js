import React from 'react'

export default function Header(){
    return (
        <header style={headStyle}>
            <h1>Todo List</h1>
        </header>
    )
}

const headStyle = {
    textAlign  : 'center',
    backgroundColor : '#333',
    color           : 'white',
    padding         : '5px'
}
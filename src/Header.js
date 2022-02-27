import React from 'react'
import { useState } from 'react';
import Button from './components/Button';

const Header = (props) => { 

    const text=(props.visibility)?'Close Form':'Add Task';
    const color=(props.visibility)?'red':'black';
    return (
        <div className='header'>
            <h1 style={{color:"black"}}>TaskTracker</h1>
            <Button text={text} color={color} onClick={props.onClickAdd}/>
        </div>
    )
}

export default Header;
import React from 'react';
import 'boxicons';
import './Icons.css';

export const Icons = () => {
    return (
        <div>
            <span><box-icon name='heart'/></span>
            <span><box-icon name='user'/></span>
            <span><box-icon name='basket'/></span>
            <span>Item: <strong>0.00$</strong></span>
        </div>
    )
}
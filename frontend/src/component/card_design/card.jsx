import React from 'react';
import './card.css';

export default function  Card_design(props){
    return(
        <div>
        <div className='cardDesign'>
        <div className='heading'>{props.data.heading}</div>
        <p className='subheading'>
       {props.data.subheading}
        </p>
        <div className='date'> Dated : {props.data.date}</div>
        </div>
        </div>
    );
}
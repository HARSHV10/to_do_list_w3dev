import React, { useEffect } from 'react';
import server from './server';
import Login from './Login/login';
import Nav from './navigation/nav';
import { useNavigate } from 'react-router-dom';





export default function Main(){
    const nav = useNavigate();
    useEffect(()=>{
        nav('/login');
    },[]);
    return(
       <div></div> 
    )
}
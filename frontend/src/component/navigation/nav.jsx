import React from 'react';
import { Link, Navigate,redirect,useNavigate} from 'react-router-dom';
import './nav.css'

export default function Nav(){
    return(
        <div className='nav'>
        <Link to="/login">
        <div className='nav-elem'>
        Login
        </div>
        </Link>
        <div>
        ToDo
        </div>
        <Link to="/register">
        <div className='nav-elem'>
        Register
        </div>
        </Link>
        
        
        </div>
    );
}
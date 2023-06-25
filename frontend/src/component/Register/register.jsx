import React, { useState } from 'react';
import server from '../server';
import { Link, Navigate,redirect,useNavigate} from 'react-router-dom';

export default function Register(){
    const [userName,setUserName] =useState();
    const [userPassword,setPasword] =useState();
    const [userPassword_again,setPasword_again] =useState();
    const [state,setState]=useState();
    const navigate = useNavigate();
    return(
        <div>
        <section>
        <div className="main-form-container">
          <div id="form_section" className="form-container">
            <div className="login-form form-wraper ">
              <div>
                <div className="form-title">
                  <h2>Register</h2>
                </div>
                <div className="input-group">
                  <div className="box">
                    <span>
                    
                      <input placeholder="Username"  className="myInput" type="text" onChange={(e)=>{
                        setUserName(e.target.value);
            
                      }} />
                    </span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="box">
                    <span>
                      <input placeholder="Password"  className="myInput" type="text" onChange={(e)=>{
                        setPasword(e.target.value);
                      }} />
                    </span>
                  </div>
                </div>
                
                <div className="forget-password">
                  <a href="">FORGOT PASSWORD</a>
                </div>
                <div className="action-button">
                  <button onClick={async ()=>{
                    const status =await server.post('/register',{
                        userName:userName,
                        password:userPassword
                    })
                    if(status.data.stat){
                      alert("you will be redirected to the login page ")
                      navigate('/login');
                    }
                    else{
                      alert("username password already exist change name ");
                    };
                  }
                  }>Sign Up</button>
                </div>
              </div>
            </div>
            <div className="signUp-form form-wraper">
              <div>
                <div className="form-title">
                  <h2>Sign Up</h2>
                </div>
                <div className="input-group">
                  <div className="box">
                    <span>
                      <input
                        placeholder="Full Name"
                        className="myInput"
                        type="text"
                      />
                    </span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="box">
                    <span>
                      <input placeholder="Email" className="myInput" type="text" />
                    </span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="box">
                    <span>
                      <input
                        placeholder="Mobile No."
                        className="myInput"
                        type="number"
                      />
                    </span>
                  </div>
                </div>
                <div style={{ marginBottom: 0 }} className="input-group">
                  <div className="box">
                    <span>
                      <input
                        placeholder="Password"
                        className="myInput"
                        type="password"
                      />
                    </span>
                  </div>
                </div>
                <div className="action-button">
                <button>
            
                </button>
                </div>
              </div>
            </div>
          </div>
          <div id="multiple-btn" className="bg-btn-container">
            <div className="action-button">
              <button>Sign Up</button>
            </div>
            <div className="action-button">
            <Link to="/Login">
            <button>Login In</button>
            </Link>
            </div>
          </div>
        </div>
      </section>
      
        
        </div>
 
    );
}
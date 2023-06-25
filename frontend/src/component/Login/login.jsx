import React, { useState } from 'react';
import './login.css'
import server from '../server';
import Todo from '../todo/todo';
import { Link,useNavigate } from 'react-router-dom';






export default function Login(){
    const [userName,setUserName] =useState();
    const [userPassword,setPasword] =useState();
    const [state,setState]=useState();
    const [session,setSession]=useState();
    const navigate = useNavigate();


    
    return(
        <div>
        <section>
        <div className="main-form-container">
          <div id="form_section" className="form-container">
            <div className="login-form form-wraper ">
              <div>
                <div className="form-title">
                  <h2>Login</h2>
                </div>
                <div className="input-group">
                  <div className="box">
                    <span>
                    
                      <input placeholder="Email" className="myInput" type="text" onChange={(e)=>{
                        setUserName(e.target.value);
            
                      }} />
                    </span>
                  </div>
                </div>
                <div className="input-group">
                  <div className="box">
                    <span>
                      <input placeholder="Password" className="myInput" type="text" onChange={(e)=>{
                        setPasword(e.target.value);
            
                      }} />
                    </span>
                  </div>
                </div>
                <div className="forget-password">
                  <a href="">FORGOT PASSWORD</a>
                </div>
                <div className="action-button">
                  <button className='button-prop' onClick={async ()=>{
                    const status =await server.post('/login',{
                      userName:userName,
                      password:userPassword
                  })
                  setState(status)
                  // if(status.data!=)
                  console.log(status)
                  if(status.data.stat==0){
                      alert("this user id is not found ")
                  }
                  else if (status.data.stat==-1){
                      alert("wrong username password combination ")
                  }
                  else{
                    navigate('/dashboard',{state:status.data.stat})
                  }
                  }}>Login</button>
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
                Sign Up
                </button>
                </div>
              </div>
            </div>
          </div>
          <div id="multiple-btn" className="bg-btn-container">
            <div className="action-button">
              <button>Login</button>
            </div>
            <div className="action-button">
            <Link to="/register">
            <button>Sign Up</button>
            </Link>
            </div>
          </div>
        </div>
      </section>
      
        
        </div>
    );
}
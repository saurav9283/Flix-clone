import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.scss";

export default function Register() {
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const emailRef=useRef()
    const passwordRef=useRef()
    const navigater=useNavigate()
    const handelStart=()=>{
        setEmail(emailRef.current.value);
    }
    const handelFinish=()=>{
        setPass(passwordRef.current.value);
        navigater('/home') 
    }
  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
            <img className="logo" 
            src="https://www.coolgenerator.com/Data/Textdesign/202302/9db2c666450e286ebee5855807717826.png" alt="" />
            <button className="loginButton">Sign In</button>
            </div>
        </div>
        <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ?(
            <div className="input">
            <input type="email" placeholder="email address" ref={emailRef}/>
            <button className="registerButton" onClick={handelStart}>Get Started</button>
        </div>
        ):(
            <div className="input">
            <input type="password" placeholder="password" ref={passwordRef}/>
            <button className="registerButton" onClick={handelFinish}>Start</button>
        </div>
        )

        }
        
        </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import About from '../About/About';
import Contacts from '../Contact/Contacts';
import './landingpage.css'
import { useNavigate } from 'react-router-dom';



function  LandingPage() {

  // states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [wrongPass, setWrongPass] =useState(2);

  //navigation
  const navigate = useNavigate();

  useEffect(()=>{
    if(parseInt(localStorage.getItem('gotologin')) ===2){
        setSuccess(true);
    }else{
      setSuccess(false);
    }
  }, []);

  const userLogin = (e) => {
    e.preventDefault();
    // setLoading(true);
    fetch("https://project-recipe.onrender.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        // << code 1 >> is sent by the backend when user password matches the entered password so we will let him login and redirect to the todos page
        if (data.code === 1) {
          localStorage.setItem("UserID", data.userid);
          localStorage.setItem("UserName", data.name);
          navigate("/todos");
        } else if (data.code === -1) {
          navigate("/login");
          setWrongPass(1);
        } else {
          navigate("/login");
          setWrongPass(0);
        }
        //resetting the fields to their normal state (empty)
        // setLoginEmail("");
        // setLoginPass("");
        // setLoading(false);
      });
    };

    const userSignup = (e) => {
      e.preventDefault();
      localStorage.removeItem("gotologin");
      // setLoading(true);
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, confirmPassword }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.code === 1) {
            setWrongPass(true);
          } else {
            localStorage.setItem("gotologin", 2);
            navigate("/login");
            setUsername("");
            setEmail("");
            setPassword("");
            
          }
          // setLoading(false);
        });
    }; 
    const toSignup=()=>{
      navigate("/signup");
    }

    // Messages for different condition
    // const wrongPassMsg = (
    //   <h3 style={wrongPassStyle}>
    //     {warnWrongPass}&nbsp;&nbsp;&nbsp;&nbsp;You Entered Incorrect Login Details
    //     please try with another
    //   </h3>
    // );
    // const wrongPassMsgnotFound = (
    //   <h3 style={wrongPassStyle}>
    //     {notFound} &nbsp;&nbsp;&nbsp;&nbsp; User not found click on signup first{" "}
    //     <button style={tosignupBtn} onClick={toSignup}>
    //       Signup
    //     </button>
    //   </h3>
    // );

  
  return (
    <div>
       <div className="split-landing">
    {/* Left section */}
    <div className="left-landing">
        {/* content for left section */}
        <div className="landing">
          <div className="landing-content">
            <h3>Welcome to </h3>
            <h1>Tasty Trail</h1>
            <h2>The recipe app that makes every meal a success...</h2> 
          </div>
        </div>
        <button className="landing-p-button">Create Account</button>

    </div>

    {/* Right section */}
    <div className="right-landing">
        {/* content for right section */}
        <div className="landing-container">
      <div className="login-container">
        <input id="item-1" type="radio" name="item" className="sign-in" checked />
        <label htmlFor="item-1" className="item">Sign In</label>
        <input id="item-2" type="radio" name="item" className="sign-up" />
        <label htmlFor="item-2" className="item">Sign Up</label>
        {/* Login Part */}
        <div className="login-form">
          <div className="sign-in-htm">
            
            <form onSubmit={userLogin}>
              <div className="group">
                <input 
                  placeholder="Email" 
                  id="user" 
                  type="text" 
                  className="login-n-input" 
                  value={email} 
                  // onChange={(val) => {setLoginEmail(val.target.value)}}
                  />
              </div>
              <div className="group">
                <input 
                    placeholder="Password" 
                    id="pass" 
                    type="password" 
                    className="login-e-input" 
                    data-type="password" 
                    value={password} 
                    // onChange={(val) => {setLoginPass(val.target.value)}} 
                    />
              </div>
              <div className="group">
                <input 
                    type="submit" 
                    className="button" 
                    value="Sign In" />
              </div>
             

            </form>
            <div className="hr"></div>
            <div className="l-footer">
              <a href="#forgot">Forgot Password?</a>
            </div>
          </div>
          {/* Sign Up Part */}
          <div className="sign-up-htm">
            <form onSubmit={userSignup}>
              <div className="group">
                <input 
                  placeholder="Username" 
                  id="user" 
                  type="text" 
                  className="input" 
                  value={username} 
                  onChange={(event) => setUsername(event.target.value)} />
              </div>
              <div className="group">
                <input 
                  placeholder="Email address" 
                  id="email" 
                  type="text" 
                  className="input" 
                  value={email} 
                  onChange={(event) => setEmail(event.target.value)} />
              </div>
              <div className="group">
                <input 
                  placeholder="Password" 
                  id="password" 
                  type="password" 
                  className="input" 
                  data-type="password" 
                  value={password} 
                  onChange={(event) => setPassword(event.target.value)} />
              </div>
              <div className="group">
                <input 
                  placeholder="Confirm password" 
                  id="confirm-password" 
                  type="password" 
                  className="input" 
                  data-type="password" 
                  value={confirmPassword} 
                  onChange={(event) => setConfirmPassword(event.target.value)} />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign Up" />
              </div>
            </form>
            <div className="hr"></div>
            <div className="footer">
              <label htmlFor="item-1" className="item-2">Already have an account?</label>
            </div>
          </div>
        </div>
      </div>
    </div>
       
    </div>
    </div>
    
        <About />
        <Contacts />

    </div>
   

  );
}

export default LandingPage;

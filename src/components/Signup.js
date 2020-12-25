import React, { useState } from "react";
import "../styles/Signup.scss";
import Profile from "../components/Profile"
import Skills from "../components/Skills"
import { useSelector, useDispatch } from "react-redux"
import incrementStep from "../components/actions/incrementStep"
const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState(null);
  const [code, setCode] = useState(0);
  const [login, setLogin] = useState(false);
  //const [step, setStep] = useState(0);
///////REDUX START
const step = useSelector(state => state.step)
const dispatch = useDispatch()
///////REDUX END
  function SignupFormSubmit(e) {
    e.preventDefault();
    fetch("https://be.bhyve-app.com:3020/user/signup/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
      //.then(res => res.json())
      .then(data => {
        if (data.ok) {
          console.log("ok", data);
          setLogin(true);
        } else {
          setCode(data.status);
          console.log("err",data);
        }
      }).catch(err => {console.log(err, "Error")})
  }
  if (code === 400) {
    alert("Invalid Input");
    window.location.reload();
  } else if (code === 409) {
    alert("Email Already Exists");
    window.location.reload();
  }
  ///////Sign up Form end
  ///////Log In Form
  function LoginFormSubmit(e) {
    e.preventDefault();
    fetch("https://be.bhyve-app.com:3020/user/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    }).then(res => {
      res.json().then(data => {
        //console.log("data",data)
        localStorage.setItem(
          "login",
          JSON.stringify({
            // login: true,
            accessToken: data.accessToken,
          })
        );
      });
    });
    const newToken = JSON.parse(localStorage.getItem("login"));
    //console.log(newToken.accessToken, "this is token");
    fetch("https://be.bhyve-app.com:3020/user/profile", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + newToken.accessToken,
      },
    }).then(res =>
      res.json().then(data => {
        console.log("yes",data);
        dispatch(incrementStep())
      })
    );
  }
  //console.log(authorize)
  ///////Log In
  switch(step) {
    case 0:
      return (
        <section id="Signup">
          <div className="form-wrapper">
           {/* k {console.log(login)} */}
    
    
            {login === false ? (
              <form className="form" onSubmit={SignupFormSubmit}>
                <label>Sign Up</label>
                <input
                  type="email"
                  placeholder="E-mail"
                  onChange={e => setEmail(e.target.value)}
                  required
                ></input>
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="signup-password"
                  // onClick={() => setPTextVisibility(true)}
                  onChange={e => setPassword(e.target.value)}
                ></input>
                <br />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  //onClick={() => setPTextVisibility(false)}
                  onChange={e => setPassword2(e.target.value)}
                ></input>
                <br />
                <button
                  type="Submit"
                  onClick={
                    password === password2 && email ? SignupFormSubmit : null
                  }
                >
                  Sign Up
                </button>
              </form>
            ) : (
              <form className="form" onSubmit={LoginFormSubmit}>
                <label>Sign In</label>
                <input
                  type="email"
                  placeholder="E-mail"
                  onChange={e => setEmail(e.target.value)}
                  required
                ></input>
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="signup-password"
                  // onClick={() => setPTextVisibility(true)}
                  onChange={e => setPassword(e.target.value)}
                ></input>
                <br />
                <br />
                <button type="submit" onClick={LoginFormSubmit}>
                  Log in
                </button>
              </form>
            )}
    
    
          </div>
          <div className="signup-errorText-wrapper">
            <ul className="signup-errorText-wrapper-ul">
              <li>Password must be minimum 8 characters</li>
              <li>
                maximum 20 characters and must either contain numeric value OR
                special character OR both
              </li>
              <li>password must be longer than or equal to 8 characters</li>
            </ul>
          </div>
        </section>
      );
    case 1:
      return (
        <Profile/>
      )
      case 2:
      return (
        <Skills/>
      )
    default:
      <h1>Page Not Found</h1>
  }
  
};

export default Signup;

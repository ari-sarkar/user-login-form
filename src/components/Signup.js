import React, { useState } from "react";
import "../styles/Signup.scss";
import { Link } from "react-router-dom";
const Signup = () => {
  // const [pTextVisibility, setPTextVisibility] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState(null);
  const [code, setCode] = useState(0);
  const [login, setLogin] = useState(false);
  //console.log(email,password,password2);

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
          console.log("err");
        }
      });
  }
  if (code === 400) {
    alert("Invalid Input");
    window.location.reload();
  } else if (code === 409) {
    alert("Email Already Exists");
    window.location.reload();
  }
  return (
    <section id="Signup">
      <div className="form-wrapper">
        {console.log(login)}
      {login === false ? <form className="form" onSubmit={SignupFormSubmit}>
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
            onClick={password === password2 && email ? SignupFormSubmit : null}
          >
            Sign Up
          </button>
        </form>
        :
        <form className="form" onSubmit={SignupFormSubmit}>
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
          <button
            type="Submit"
            onClick={password === password2 && email ? SignupFormSubmit : null}
          >
            Log in
          </button>
        </form>
        }
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
};

export default Signup;
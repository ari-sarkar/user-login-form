import React, { useState } from "react";
import "../styles/Profile.scss";
import { useDispatch } from "react-redux"
import incrementStepTwo from "../components/actions/incrementStep2"
function Profile() {
  ///////REDUX START
//const step = useSelector(state => state.step)
const dispatch = useDispatch()
///////REDUX END
  const [firstName, SetFirstName] = useState(null);
  const [lastName, SetLastName] = useState(null);
  const ProfileSubmit = e => {
    e.preventDefault();
    const newToken = JSON.parse(localStorage.getItem("login"));
    fetch("https://be.bhyve-app.com:3020/user/basic/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + newToken.accessToken,
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data, "data");
        if(data.statusCode === undefined){
          dispatch(incrementStepTwo())
        }
        

      })
      .catch(err => {
        console.log(err, "error");
      });
  };
  return (
    <section id="Profile">
      <form onSubmit={ProfileSubmit}>
        <label>First Name</label>
        <br />
        <input type="text" onChange={e => SetFirstName(e.target.value)}></input>
        <br />
        <label>Last Name</label>
        <br />
        <input type="text" onChange={e => SetLastName(e.target.value)}></input>
        <br />
        <button type="submit" onClick={ProfileSubmit}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Profile;

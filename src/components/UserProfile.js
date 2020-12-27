import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/UserProfile.scss";
const UserProfile = () => {
  const [userData, setuserData] = useState([]);
  useEffect(() => {
    const GetUserProfile = async () => {
      const newToken = JSON.parse(localStorage.getItem("login"));
      const reasult = await axios(
        "https://be.bhyve-app.com:3020/user/profile",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + newToken.accessToken,
          },
        }
      );
      setuserData(reasult.data);
    };
    GetUserProfile();
    // const PrintUserdat=() =>{
    //     const listofSkills =document.querySelector(".skills")
    //     const list = document.createElement("li")
    //     list.innerHTML(userData.skillName)
    //     listofSkills.appendChild(list)
    // }
    // PrintUserdat()
  }, [userData.skillName, userData]);
  //console.log(userData.skills)
//   const SendSkills= () =>{
//     return userData ? userData.map(item => <li key={item.id}>{item.skills}</li>): null
// }
  return (
    <section>
      <div className="userInfo-container">
        <div className="user-name">
          <h2>Name: </h2>
          <h3>
            {userData.firstName} {userData.lastName}
          </h3>
        </div>
        <div className="user-skills">
          <p>Skills</p>
          <ul className="skills">
            <li>{userData.skills}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;

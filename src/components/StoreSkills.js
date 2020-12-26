import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import incrementStep3 from "../components/actions/incrementStep3";
const StoreSkills = ({ selectedCustomers }) => {
  //console.log(selectedCustomers)
  const dispatch = useDispatch();
  useEffect(() => {
    const submitSkills = () => {
      const skillName =  selectedCustomers ? selectedCustomers.map(item => item.skillName): ""
      const newToken = JSON.parse(localStorage.getItem("login"));

      // axios.post('/user', {
      //     firstName: 'Fred',
      //     lastName: 'Flintstone'
      //   })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });

      axios
        .post(
          "https://be.bhyve-app.com:3020/user/skills",
          {
            skills: { skillName },
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + newToken.accessToken,
            },
          }
        )
        .then(res => {
          console.log(res, "response");
         if(skillName.length > 2 && skillName.length < 11){
            dispatch(incrementStep3())
         }
        })
        .catch(err => console.log(err, "error"));

      //console.log(reasult.data)
    };
    submitSkills();
  }, [selectedCustomers, dispatch]);
  return <div></div>;
};

export default StoreSkills;

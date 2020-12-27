import React, { useEffect, useState } from "react";
import axios from "axios";
import Demo from "../components/Demo";
const Skills = () => {
  const [items, setitems] = useState([]);
  //console.log(query)
  useEffect(() => {
    const fetchSkills = async () => {
      const reasult = await axios(
        `https://be.bhyve-app.com:3020/skills`
      );
      setitems(reasult.data);
    };
    fetchSkills();
  }, []);
  return (
    <div>
      <Demo items={items}/>
    </div>
  );
};

export default Skills;

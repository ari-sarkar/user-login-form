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
      //This shuold automaticaly filter the skills but for some reason not working
      setitems(reasult.data);
      //console.log(reasult.data)
      //console.log(query)
    };
    fetchSkills();
  }, []);
  return (
    <div>
      {/* <Search getquery={val => setquery(val)} items={items} />
      <SkillList items={items} loading={loading} /> */}
      <Demo items={items}/>
    </div>
  );
};

export default Skills;

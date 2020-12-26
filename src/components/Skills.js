import React, { useEffect, useState } from "react";
import axios from "axios";
import SkillList from "../components/SkilList";
import Search from "../components/Search";
import Demo from "../components/Demo";
const Skills = () => {
  const [items, setitems] = useState([]);
  const [loading, setloading] = useState(true);
  const [query, setquery] = useState("");
  //console.log(query)
  useEffect(() => {
    const fetchSkills = async () => {
      const reasult = await axios(
        `https://be.bhyve-app.com:3020/skills?skillName=${query}`
      );
      //This shuold automaticaly filter the skills but for some reason not working
      setitems(reasult.data);
      //console.log(reasult.data)
      setloading(false);
      //console.log(query)
    };
    fetchSkills();
  }, [query]);
  return (
    <div>
      {/* <Search getquery={val => setquery(val)} items={items} />
      <SkillList items={items} loading={loading} /> */}
      <Demo items={items}/>
    </div>
  );
};

export default Skills;

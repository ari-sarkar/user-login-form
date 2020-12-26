import React, { useState } from "react";

const Skill = ({ item, items }) => {
  const [selection, setselection] = useState(false);
  //const [ti, setti] = useState("no");
  //let newArr = [];
  const hano = e => {
  
  };
 
  return (
    <div className="skill">
      <label class="container">
        {item.skillName}
        <input
          type="checkbox"
          value={selection}
          onChange={e => setselection(!selection)}
          onClick={e => hano()}
        />
        <span class="checkmark"></span>
      </label>
    </div>
  );
};

export default Skill;

import React, { useState } from "react";
import StoreSkills from "../components/StoreSkills"
const Search = ({ getquery, items }) => {
  const [input, setinput] = useState("");
  const [data, setdata] = useState("");
  const [Id, setid] = useState(null);
  const onChange = val => {
    setinput(val);
    getquery(val);
    //console.log(input)
  };
  function clicked(e) {
    e.preventDefault();
    let b = items.map(item => item.skillName);
    let c = items.map(item => item.id);
    for (let i = 0; i < b.length; i++) {
      if (b[i].toLowerCase() === input.toLowerCase()) {
        setid(c[i])
        let div = document.querySelector(".selectedskills");
        div.innerHTML +=
          "<p>" + input + "</p>"
          setdata(input);
          // + `<button className="del">delete</button>`;
        // let n = document.querySelector(".del");
        // if(n){
        //      n.addEventListener("onClick").style.color = "red" 
        // }
      
      }
    }
  }
//console.log(data)
  return (
    <div>
      <form>
        <input
          type="text"
          value={input}
          onChange={e => onChange(e.target.value)}
        ></input>
        <button onClick={clicked}>Add</button>
      </form>
      <div className="selectedskills"></div>
      <StoreSkills data={data} items={items} id={Id}/>
    </div>
  );
};

export default Search;

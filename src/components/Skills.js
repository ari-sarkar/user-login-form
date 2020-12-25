import React, { useEffect, useState } from 'react'
import  axios  from "axios"
import SkillList from "../components/SkilList"
import Search from "../components/Search"
const Skills=()=> {
  const [items, setitems] = useState([])
  const [loading, setloading ] =useState(true)
  const [query, setquery ] =useState("")
  //console.log(query)
  useEffect(() => {
    const fetchSkills= async ()=>{
      const reasult = await axios(`https://be.bhyve-app.com:3020/skills?skillName=${query}`)

      setitems(reasult.data)
      console.log(reasult.data)
      setloading(false)
      //console.log(query)
    }
    fetchSkills()
  }, [query])
  return (
    <div>
      <Search getquery={(val) => setquery(val)}/>
      <SkillList items={items} loading={loading}/>
    </div>
  )
}

export default Skills

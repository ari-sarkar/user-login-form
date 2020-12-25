import React from 'react'
import "../styles/Skills.scss"
import Skill from "../components/Skill"
const SkilList=({ items, loading }) => {
    return  loading ? <h1>loading...</h1> : <section id="skills">
        <div className="skil-container">
        {items.map(item =>
            <Skill key={item.id} item={item}/>
            )}
        </div>
        
    </section>
}
export default SkilList

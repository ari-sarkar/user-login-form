import React from 'react'
import "../styles/Skills.scss"
import Skill from "../components/Skill"
const SkilList=({ items, loading }) => {
    //let newArr = []
    return  loading ? <h1>loading...</h1> : <section id="skills">
        <div className="skil-container">
        {items.map(item =>
            <Skill key={item.id} item={item} items={items}/>
            )}
        </div>
        
    </section>
}
export default SkilList

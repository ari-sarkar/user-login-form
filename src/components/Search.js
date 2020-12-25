import React, { useState } from 'react'

const Search = ({getquery}) => {
    const [ input, setinput ] = useState("")
    const onChange=(val) => {
        setinput(val)
        getquery(val)
        //console.log(input)
        }
    return (
        <div>
            <form>
                <input 
                type="text"
                value={input}
                onChange={(e) => onChange(e.target.value)}
                ></input>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Search

import { useState } from "react"
import "./index.css"

function SearchBar (props) {
  
  const {setSearch} = props
  const [value, setValue] = useState("")
     
  
  return (
    <div className="search-bar">
      <input type="text" value={value} onChange={(event)=>  setValue(event.target.value)} placeholder="Input the user name here " />
      <button className="button-search"onClick={() => {setSearch(value) ; setValue("")} }> Search</button>

    </div>
  )
  
  
}



export {SearchBar}
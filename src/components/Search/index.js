import "./index.css"

function SearchBar () {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Input the user name here " />
      <button> Search</button>
    </div>
  )
}


export {SearchBar}
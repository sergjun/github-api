import { useState, useEffect } from "react";
import "./App.css"
import { CreateFooter } from "./components/Footer";
import { Header } from "./components/Header/Index";
import { CreateMainCard } from "./components/MainCard";

import { SearchBar } from "./components/Search";




function App() {
  
  const [search, setSearch] = useState("")
  const [data, setData] = useState("");
  
  
  useEffect(() => {
    
    if (search.length !== 0) {
      fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json())
      .then(repos => setData(repos))
    }
  }, [search]);
  
  

  console.log(search)
  
  return (
    <>
      <Header/>
      <SearchBar setSearch={setSearch}/>
      <CreateMainCard data={data}/>
      <CreateFooter/> 
  
    </>  
  
    
  );
}
 export default App;
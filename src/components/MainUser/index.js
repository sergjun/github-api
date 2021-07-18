import "./index.css"
import {useEffect, useState} from 'react'

function CreateMainUser () {

    const [data, setData] = useState("");
    useEffect(() => {
      fetch("https://api.github.com/users/sergjun")
        .then(response => response.json())
        .then(repos => setData(repos))
        
    }, []);
    console.log(data)
    return (
      <div className ="MainUser" >
        <h2>
        <p>{data.login}</p>
          
        </h2>
        <p>{data.name}</p>
        
        
        <img src={data.avatar_url} alt="user avatar"></img>
        <p>{data.repos_url}</p>
         
        
               
          
      </div>
    );

}


export {CreateMainUser}
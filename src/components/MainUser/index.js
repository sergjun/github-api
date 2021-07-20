import "./index.css"

// function CreateList () {
//   console.log("lista criada")
// }



function CreateMainUser (props) {

    const {data, repos} = props 


    console.log(repos)

    
    return (
      
      <div className ="MainUser" >
      
      {data?.login ? <h2>{data.login}</h2> : ""}
      <h3>{data.name}</h3>
     
      
      
      {data?.login ? <img src={data.avatar_url} alt="user avatar"></img> : ""}

      {repos.map((repo, i) => {
        return (
          <>
            <h4>{repo.name}</h4>
            <p>{repo.description}</p>
          </>
        )
      })}


       
      
             
        
    </div>
    );

}


export {CreateMainUser}
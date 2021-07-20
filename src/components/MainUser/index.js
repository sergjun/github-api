import "./index.css"

// function CreateList () {
//   console.log("lista criada")
// }



function CreateMainUser (props) {

    const {data, repos} = props 


    console.log(repos)

    
    return (
      
      <div className ="MainUser" >
      <div className="MainName">
      {data?.login ? <h2>{data.name}</h2> : ""}
      <h3>{data.bio}</h3>
     
      
      
      {data?.login ? <img src={data.avatar_url} alt="user avatar"></img> : ""}
      </div>

      {repos.map((repo, i) => {
        return (
          <div className="MainRepo">
            <h4>{repo.name}</h4>
            <p>{repo.description}</p>
          </div>
        )
      })}


       
      
             
        
    </div>
    );

}


export {CreateMainUser}
import "./index.css"

// function CreateList () {
//   console.log("lista criada")
// }



function CreateMainUser (props) {

    const {data} = props 
    const repositorioApi = data.repos_url

    console.log(repositorioApi)
    
    return (
      
      <div className ="MainUser" >
      
      {data?.login ? <h2>{data.login}</h2> : ""}
      <h3>{data.name}</h3>
     
      
      
      {data?.login ? <img src={data.avatar_url} alt="user avatar"></img> : ""}
      {data?.login ? <button> Mostrar respositorios </button> : ""}
      <p>{data.repos_url}</p>
       
      
             
        
    </div>
    );

}


export {CreateMainUser}
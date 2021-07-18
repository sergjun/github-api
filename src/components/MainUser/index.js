import "./index.css"


function CreateMainUser (props) {

    const {data} = props 


    
    return (
      <div className ="MainUser" >
        <h2>
        {data?.login ? <p>{data.login}</p> : <p>Nenhum usuário</p>}
          
        </h2>
        <p>{data.name}</p>
        
        
        {data?.avatar_url ? <img src={data.avatar_url} alt="user avatar"></img> : ""}
        <p>{data.repos_url}</p>
         
        
               
          
      </div>
    );

}


export {CreateMainUser}
import { CreateMainUser } from "../MainUser"
import "./index.css"

function CreateMainCard (props) {

    const {data, repos} = props 
    


        

    return (
        <div className="MainCard">
        <CreateMainUser data={data} repos={repos}/>
        </div>
    ) 

}


export { CreateMainCard }
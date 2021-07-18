import { CreateMainUser } from "../MainUser"
import "./index.css"

function CreateMainCard (props) {

    const {data} = props 



    return (
        <div className="MainCard">
        <CreateMainUser data={data}/>
        </div>
    ) 

}


export { CreateMainCard }
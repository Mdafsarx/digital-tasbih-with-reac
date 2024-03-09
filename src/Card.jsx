import { useState } from "react"
import "./card.css"
import Reset from "./reset"

const Card=()=>{

const [count,setCount]=useState(0)
if(count<0){return alert('negative value cant allowed')}


function add(){
    const newNumber=count+1 
    setCount(newNumber)
}

return (

<div>

<h2>{count}</h2>

<div>
    <button className="button" onClick={add}>Add</button>
    <button className="button" onClick={()=>{
        setCount(count-1)
    }}>Minus</button>
    
<button onClick={()=>{setCount(0)}} className="button">reset</button>

</div>


</div>


)

}
export default Card
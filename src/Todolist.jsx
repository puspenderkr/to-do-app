import React from "react";

const Todolist = (props)=>{

   


    return(
<>
<div className="todo_style">
    <li className= "fa fa-times" onClick= {() =>{
        props.onSelect(props.id);
    }}></li>
     <li> {props.text} </li>
     </div>
</>
)
}

export default Todolist;
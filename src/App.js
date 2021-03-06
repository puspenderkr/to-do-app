import React, { useState } from 'react'
import Todolist from './Todolist';


const App = () => {

  const [inputList , setInputList] = useState("");
  const [items, setItems] = useState([]);

const itemEvent = (e)=>{
    setInputList(e.target.value);
}

const listOfItems = () =>{
   setItems((oldItems) =>{
     return [...oldItems, inputList]
   })
   setInputList("");
}

const deleteItems = (id) =>{
  console.log("deleted")
  setItems((oldItems) => {
    return oldItems.filter((arrElem, index) =>{
       return index !== id
    })
  })
  
}


  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> To-Do List </h1>
        <br />
        <input type="text" placeholder="add a task" onChange={itemEvent} value={inputList} />

        <button onClick={listOfItems}> + </button>

        <ol>

        {items.map( (itemval , index) =>{
         return <Todolist
         key={index}
         id={index} 
         text ={itemval}
         onSelect={deleteItems}
         />
        } )}
          
          </ol>
        </div>

    </div>
    </>
  );
}

export default App;

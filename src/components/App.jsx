import React, { useState } from "react";
import ToDoItems from "./ToDoItems.jsx";
import InputArea from "./Input.jsx";

function App() {
   const [items, setItems]= useState([]);

  function handleClick(inputText){
    setItems(preItems=> {
      return [...preItems , inputText];
    });
  
  }


return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <InputArea  onAdd={handleClick}/>
      <div >
        <ul>
        { items.map((todoItem, index) => (
            <ToDoItems
              key={index}
              text={todoItem}
              
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

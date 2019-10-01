import React from 'react'
function TodoItem(props){
    return (
        <div className="todo-item">     
           <input type="checkbox" checked={props.items.completed}/>
            <p>{props.items.text}  </p>
            <p>{props.items.completed}</p>
            
        </div>
    
    )
}

export default TodoItem;



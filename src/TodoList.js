import React from 'react'

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.additem.map((newItem) => (
          <li key={newItem.id}>
            {newItem.name}
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList
import React, {useState} from 'react'
import Form from './Form'
import TodoList from './TodoList'

const App = () => {
const [addItem, setAddItem] = useState([])
const addItems = (item)=>{
setAddItem((prevItem) =>{
  return [...prevItem, { item: item, id: Math.random().toString() }];
})
}

  return (
    <div>Hello
    <TodoList additem={addItems}/>
    <Form newItem={addItem}/>
    </div>
  )
}

export default App
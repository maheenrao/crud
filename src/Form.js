import React, {useState} from 'react'

const Form = (props) => {
  const [data, setData]= useState([])
const addData = (e)=>{
  setData(e.target.value)
}

const submit = (e) =>{
e.preventDefault()
props.additem(data)
setData('')
}

  return (
    <form onSubmit={submit}>
      <label>List of Items</label>
    <div>
      <input type="text" onChange={addData} value={data}  />   </div>
    
    <button> Add Items </button>
    </form>
  )
}

export default Form
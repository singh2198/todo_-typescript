import React from 'react'
import { Todo } from './Todo'

// import { Box } from '@chakra-ui/react'

interface Todolist{
    todo:Todo 
    handledelet :(id:number)=>void
}


function Todolist(props:Todolist) {
    
  return (
    <>
    <div >
        <p>{props.todo.title}...{props.todo.status}</p>
        <button onClick={()=>props.handledelet(props.todo.id)}>Delete</button>
        
    </div>
    </>
  )
}

export default Todolist
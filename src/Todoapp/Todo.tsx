import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import Todolist from './Todolist'
import { Addtodb, Getetodo } from './apicall'
import { Deletapi } from './apicall'



enum Todostaus{
    Pending="pending",
    Done="Done"
}
export interface Todo{
    id:number,
    title:string,
    status:Todostaus
    handledelet ?:(id:number)=> void

}


function Todo() {

    const [todo ,settodo]=useState<Todo[]>([])


    const handleAdd =(title:string)=>{
        const payload :Todo={
            id:Date.now(),
            title,
            status:Todostaus.Pending
        }
        Addtodb(payload).then(()=>{
            handletodo()
        })

        
    }

    const handledelet=(id:number)=>{
        Deletapi(id)
    }


    const handletodo =()=>{
        Getetodo().then((res)=>{
            settodo(res)
        })
    }

    useEffect(()=>{
       handletodo()
    },[todo])



    
  return (
    <>

    <TodoInput handleAdd={handleAdd}/>
    {todo.map((todo,index)=> (
        <div key={index}>
            <Todolist  todo={todo} handledelet={handledelet}/>
        </div>
    ))}
    </>
  )
}

export default Todo
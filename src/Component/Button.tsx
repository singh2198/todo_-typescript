import React from 'react'


interface Buttonprops{
    text:string,
    handleclick:()=>void
}

function Button(prop:Buttonprops) {
  return (
    <>
    <button onClick={prop.handleclick}>{prop.text}</button>
    {/* <button onClick={()=> prop.handleclick}>{prop.text}</button> */}
    </>
  )
}

export default Button
import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert}) => {
  
useEffect(()=>{
const timeout = setTimeout(()=>{
 removeAlert()
}, 3000)
return ()=> clearTimeout(timeout)
},[])

  return (
    <section>
    <p className={`alert alert-${type}`}>{msg}</p>
    </section>
  )
}

export default Alert

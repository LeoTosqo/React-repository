import React from 'react'
// template, functionalities
// write js {}
const Dynamic = () => {
    const myname = "jone, doe";
  return (
    <div className='text-3xl text-center'>
        <h1>DYNAMIC VALUE</h1>
        <p>my name is {myname}</p>
        <p>{1+1}</p>
    </div>
  )
}

export default Dynamic
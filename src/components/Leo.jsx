import React from 'react'

const Leo = ({image,title}) => {
  return (
    <div>
    <img src={image} alt="" />
    <p>{title}</p>
        </div>
  )
}

export default Leo
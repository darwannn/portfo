import React from 'react'

function Banner({text}) {
  return (
    <div className="relative overflow-hidden h-96 background-blue" style={{height: "24rem"}}>
    <div className="absolute font-bold leading-tight text-blue" id="text" style={{fontSize: "24rem"}}>{text}</div>
  </div>
  )
}

export default Banner
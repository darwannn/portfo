import React from 'react'
import { FaChevronRight } from "react-icons/fa";
function Card({cardImage, title, description, stack, webLink}) {
  return (
    <div className="bg-white rounded-xl box-shadow" >
      <img className="w-full p-2 rounded-xl" src={cardImage} alt={title}/>
      <div className="px-6 py-4 relative w-full" style={{minHeight:"320px"}}>
        <div className="font-bold text-3xl mb-1 text-blue ">{title}</div>
        <div className="">
          {description}
        </div>


      {stack.map((text)=>{
        return  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-5 button-blue">{text}</span>;
      })}
       
        <a href={webLink} className="flex  absolute bottom-0 right-0 px-6 py-4 font-bold text-blue ">Live View<FaChevronRight className=' mt-1 ml-1'/></a>
      </div>
      
    </div>
  )
}

export default Card
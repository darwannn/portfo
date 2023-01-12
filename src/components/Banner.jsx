import React, {useRef} from 'react'

function Banner({text, image}) {
  const textRef = useRef(null);

  window.addEventListener("scroll", () => {
    /* let value = window.scrollY;
      textRef.style.marginLeft = value + 'px'; */
/* textRef.current.style.background = 'red'; */
/* console.log(textRef.current.style); */

  });

  return (
    <div className="relative ">
    { image && <img src={image} alt="" className="inset-center absolute z-5 pb-44" style={{width:"600px"}}/> }
    <div className="relative overflow-hidden h-96 background-blue" style={{height: "24rem"}}>
      
    <div className="absolute font-bold leading-tight text-blue" ref={textRef} style={{fontSize: "24rem"}}>{text}</div>
  </div>
    </div>
  )
}

export default Banner
import React from 'react'
import Banner from './Banner';
import meImage from './../img/me.png'
function About() {
  return (
    <div id="about">
         <Banner text="About" image={meImage}/>
  
    <div className="flex justify-center relative  -mt-16 z-10">

    <div className="w-full mb-10 mx-10 p-20 bg-white box-shadow rounded-2xl">


      <div className="text-2xl font-bold mb-3">Jumbotron Example</div>
      <div className="ml-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat..</div>
      <div className="text-2xl font-bold mt-10 mb-3">Jumbotron Example</div>
      <div className="flex ">
        <img src="img/image.png" className="w-1/4" alt="..."/>
        <img src="img/image.png" className="w-1/4" alt="..."/>
        <img src="img/image.png" className="w-1/4" alt="..."/>
        <img src="img/image.png" className="w-1/4" alt="..."/>
      </div>
    </div>
  </div>
  </div>
  )
}

export default About
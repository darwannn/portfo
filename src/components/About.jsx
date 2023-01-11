import React from 'react'

function About() {
  return (
    <div className="flex justify-center relative box-shadow ">

    <div className="w-full m-5 p-5 bg-white rounded-3xl">


      <div className="text-2xl font-bold">Jumbotron Example</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat..</p>
      <div className="text-2xl font-bold">Jumbotron Example</div>
      <div className="flex ">
        <img src="img/image.png" className="w-1/4" alt="..."/>
        <img src="img/image.png" className="w-1/4" alt="..."/>
        <img src="img/image.png" className="w-1/4" alt="..."/>
        <img src="img/image.png" className="w-1/4" alt="..."/>
      </div>
    </div>
  </div>
  )
}

export default About
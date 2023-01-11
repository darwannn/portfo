import React from 'react'

function Navbar() {
  return (
    <nav className=" w-full bg-white py-4 font-bold">
      
    <ul className="flex justify-center md:justify-end md:mx-5 lg:justify-end  lg:mx-5 xl:justify-end xl:mx-5 ">
      <li className="mx-2">
        <a href="#">Home</a>
      </li>
      <li className="mx-2">
        <a href="#">About</a>
      </li>
      <li className="mx-2">
        <a href="#">Project</a>
      </li>
      <li className="ms-4">
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar
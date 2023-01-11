import React from 'react'
import { FaPhone,FaFacebookMessenger,FaGithub,FaEnvelope } from "react-icons/fa";
function Home() {
  return (
    <div className="relative h-screen" style={{background: "linear-gradient(to bottom, #E6F2FE,#ffffff)"}}>
    <div className=" absolute" style={{top: "40%", left: "45%", transform: "translate(-50%, -50%)"}}>
      <div className="flex">
        <div className="flex flex-col justify-center gap-6 text-3xl">
        <a href="https://www.messenger.com/darwannn">
          <FaFacebookMessenger className="icon-blue"/>
          </a>
        <a href="tel:09190294854">
          <FaPhone className="icon-blue"/>
          </a>
        <a href="mailto:darwinsanluis.ramos14@gmail.com">
          <FaEnvelope className="icon-blue"/>
          </a>
        <a href="https://github.com/darwannn">
          <FaGithub className="icon-blue"/>
          </a>
    
        </div>

        <div className="flex-1 ml-8">
          <div className="text-3xl leading-none">&lt;Hello World/&gt;</div>
          <div className="text-8xl font-bold leading-none text-blue">DARWIN RAMOS</div>
          <div className="mt-2 mb-4 text-2xl">I'm a computer science student based in Philippines.
            I have great interest in full-stack development, artificial intelligence,
            human-computer interactions, and everything in between.</div>
          <button className="btn rounded-md px-4 py-2 button-blue">RESUME</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home
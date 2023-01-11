import React from 'react'
import { FaPhone,FaFacebookMessenger,FaGithub,FaEnvelope } from "react-icons/fa";
function Contact() {
  return (
    <div className="contact flex justify-center relative background-blue overflow-hidden">
 <div className="absolute font-bold leading-tight text-blue bottom-0 z-0" id="text" style={{fontSize: "24rem",marginBottom:"-100px"}}>Contact</div>
    <div className="relative max-w-screen-md mx-5 my-24 p-10 bg-white rounded-xl z-10">

      <p className="text-center w-1/2 m-auto leading-tight mt-3 mb-10">
        I’m open to new projects,<br/>
        feel free to send me a message.
      </p>



      <form className="w-full">

        <div className="flex flex-wrap">

          <div className="w-full md:w-1/2 md:pr-2 lg:pr-2 xl:pr-2 mb-3">
            <label className="font-bold" htmlFor="form-name">
              Name
            </label>
            <input type="text"
              className="w-full px-3 py-2 border-blue bg-gray-100 text-black border border-gray-100 rounded  focus:outline-none  "
              id="form-name" placeholder="Jane"/>
          </div>


          <div className="w-full md:w-1/2 md:pl-2 lg:pl-2 xl:pl-2  mb-3">
            <label className="font-bold" htmlFor="form-email">
              Email Address
            </label>
            <input type="email"
              className="w-full px-3 py-2 bg-gray-100 text-black border border-gray-100 rounded  focus:outline-none  "
              id="form-email" placeholder="********@*****.**"/>
          </div>


        </div>

        <div className="w-full mb-3">
          <label className="font-bold " htmlFor="form-subject">
            Last Name
          </label>
          <input type="text"
            className="w-full px-3 py-2 bg-gray-100 text-black border border-gray-100 rounded  focus:outline-none  "
            id="form-subject" placeholder="Doe"/>
        </div>



        <div className="w-full mb-3">
          <label className="font-bold" htmlFor="form-message">
            Your Message
          </label>
          <textarea rows="8"
            className=" w-full px-3 py-2 bg-gray-100 text-black border border-gray-100 rounded  focus:outline-none  "
            id="form-message" placeholder="Doe">

        </textarea>
        </div>


        <button className="w-full button-blue text-white font-bold px-4 py-2 rounded">
          Send Message
        </button>




      </form>

      <div className="relative  h-10 mt-10">
        <hr className="w-3/4 bg-black absolute inset-center"/>
        <div className=" absolute inset-center  text-center bg-white px-2 wrap">or by reaching me through</div>
      </div>

      <div className="flex flex-col lg:flex-row xl:flex-row  md:flex-row text-center font-bold w-full justify-center gap-14 my-10">

        <div className="relative">
        <FaFacebookMessenger className="absolute inset-center icon-inset text-7xl text-neutral-100 z-0" style={{left:"45%"}}/>
     
          <div className="relative">
          <div className='relative z-10'>
            <div className="">Messenger</div>
            <a href="https://www.messenger.com/darwannn">
            <div className="icon-blue text-xl">/darwannn</div>
            </a>
          </div>
          </div>
        </div>
        <div className="relative">

     
          <FaEnvelope className="absolute inset-center icon-inset text-7xl text-neutral-100 z-0" style={{left:"45%"}}/>
          <div className="relative">
          <div className='relative z-10'>
            <div className="">Gmail</div>
            <a href="mailto:darwinsanluis.ramos14@gmail.com">
            <div className="icon-blue text-xl">darwinsanluis.ramos14</div>
            </a>
          </div>
          </div>
        </div>

          <div className="relative">
        <FaPhone className="absolute inset-center icon-inset text-7xl text-neutral-100 z-0" style={{left:"45%"}}/>
        <div className='relative z-10'>
            <div className="">Phone</div>
            <a href="tel:09190294854">
            <div className="icon-blue text-xl">09190294854</div>
            
            </a>
            </div>
          </div>

        </div>
        

    </div>
  </div>
  )
}

export default Contact
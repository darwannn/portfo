import React, { useRef, useState } from "react";
import Banner from './Banner';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import aralinkImage from './../img/image.png'
import Card from './Card';


function Projects({cardImage, title, description, stack, webLink}) {
  
  const aralinkStack = ["SASS", "Vanilla JS", "AJAX","PHP","Mysql" ];
  const apexMapTrackerStack = ["Vanilla JS","PHP"];
  const pasahelpStack = ["Vanilla JS"];
  const resistorCalculatorStack = ["Vanilla JS"];
  const snackwiseStack = ["Bootstrap", "Vanilla JS", "PHP", "Mysql" ];
  const slvisualsStack = ["Vanilla JS", "PHP","Mysql" ];
  const portfolioStack = ["Tailwind","React", "Node"];


  const [swiperRef, setSwiperRef] = useState(null);



  return (
   <div id="projects">
    <Banner text="Project" scrollStart="500" position="1000"/>
      <div className=" relative -mt-16 z-50">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          
          spaceBetween={25}
         /*  pagination={{
            clickable: true,
          }} */
          navigation={true}

          breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 3,
                },
              }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
           <SwiperSlide> <Card cardImage={aralinkImage} title="Snackwise" description="Web-based online ordering system for SnackWise." stack={snackwiseStack} webLink="#"/></SwiperSlide>
        
        <SwiperSlide> <Card cardImage={aralinkImage} title="Aralink" description="is a website where you can compile the video recordings of your classes through embed links." stack={aralinkStack} webLink="#"/></SwiperSlide>
     
        <SwiperSlide> <Card cardImage={aralinkImage} title="Apex Legens Map Tracker" description="Apex Legends themed map rotation tracker." stack={apexMapTrackerStack} webLink="#"/></SwiperSlide>
        
        <SwiperSlide> <Card cardImage={aralinkImage} title="Resistor Calculator" description="Tool for reading resistor color code values for a 4 band resistor, 5 band resistor, or 6 band resistor." stack={resistorCalculatorStack} webLink="#"/></SwiperSlide>
        
        <SwiperSlide> <Card cardImage={aralinkImage} title="Pasahelp" description="Mega Manila Jeepney Fare Calculator." stack={pasahelpStack} webLink="#"/></SwiperSlide>
        <SwiperSlide> <Card cardImage={aralinkImage} title="SL Visuals" description="Portfolio of Architect Christian San Luis" stack={slvisualsStack} webLink="#"/></SwiperSlide>
        <SwiperSlide> <Card cardImage={aralinkImage} title="My Portfolio" description="My Portfolio" stack={portfolioStack} webLink="#"/></SwiperSlide>
      
        </Swiper>
  

      </div>
      </div>

  )
}

export default Projects
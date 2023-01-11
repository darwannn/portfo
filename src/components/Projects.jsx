import React, { useRef, useState } from "react";
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
  const portfolioStack = ["React"];


  const [swiperRef, setSwiperRef] = useState(null);



  return (
   
      <div className="-mt-16">
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
           <SwiperSlide> <Card cardImage={aralinkImage} title="Aralink" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat." stack={aralinkStack} webLink="#"/></SwiperSlide>
        <SwiperSlide> <Card cardImage={aralinkImage} title="Aralink" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis
          consequat." stack={aralinkStack} webLink="#"/></SwiperSlide>
        <SwiperSlide> <Card cardImage={aralinkImage} title="Aralink" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat." stack={aralinkStack} webLink="#"/></SwiperSlide>
        <SwiperSlide> <Card cardImage={aralinkImage} title="Aralink" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat." stack={aralinkStack} webLink="#"/></SwiperSlide>
        <SwiperSlide> <Card cardImage={aralinkImage} title="Aralink" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat." stack={aralinkStack} webLink="#"/></SwiperSlide>
      
        </Swiper>
  

      </div>


  )
}

export default Projects
import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avatar:AVTR1,
    name:'Pinal',
    review:'Your portfolio website comes with some significant benefits. It demonstrates your professionalism and dedication, as well as showcasing your talent. You speak about the sophistication of your approach to your business. You can also use this portfolio to define your unique identity or brand, which will help you cut through the noise in your field. '
  },
  {
    avatar:AVTR2,
    name:'Karan',
    review:'Your portfolio website comes with some significant benefits. It demonstrates your professionalism and dedication, as well as showcasing your talent. You speak about the sophistication of your approach to your business. You can also use this portfolio to define your unique identity or brand, which will help you cut through the noise in your field. '
  },
  {
    avatar:AVTR3,
    name:'Param',
    review:'Your portfolio website comes with some significant benefits. It demonstrates your professionalism and dedication, as well as showcasing your talent. You speak about the sophistication of your approach to your business. You can also use this portfolio to define your unique identity or brand, which will help you cut through the noise in your field. '
  },
  {
    avatar:AVTR4,
    name:'Dhruvi',
    review:'Your portfolio website comes with some significant benefits. It demonstrates your professionalism and dedication, as well as showcasing your talent. You speak about the sophistication of your approach to your business. You can also use this portfolio to define your unique identity or brand, which will help you cut through the noise in your field. '
  },
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
       {
        data.map(({avatar,name,review},index)=>{
          return(
          <SwiperSlide key={index} className='testimonial'>
          <div className='client__avatar'>
            <img src={avatar}/>
            </div>
            <h5 className='client_name'>{name} </h5>
            <small className='client_review'>{review}</small> 
      </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  )
}

export default testimonials
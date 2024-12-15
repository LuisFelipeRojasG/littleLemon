import React, { useState } from 'react'
import restauranfood from '../assets/image/restauranfood.jpg'
import SpecialCard from './SpecialCard'
import {dataSpecial, dataTestimonial} from '../data/dataCard.js'
import TestimonialCard from './TestimonialCard.jsx'
import chefs from '../assets/image/chefs.jpg'
import restaurant from '../assets/image/restaurant.jpg'


function Main() {
  return (
    <div>
      <section>
        <div className='flex flex-col w-screen py-10 px-40 bg-greenlim '>
          <h1 className=' text-yellowlim font-Markazy font-medium text-[64px]'>Little Lemon</h1>
          <span className=' text-whitelim font-Markazy font-light text-[40px]'>Chicago</span>
          <p className=' text-whitelim font-Karla font-light text-[26px] pb-12 w-[420px] '>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className='w-[250px] p-6 rounded-full text-blacklim font-Karla font-bold text-2xl bg-yellowlim '>Reserve a Table</button>
        </div>
        <img className=' absolute top-52 right-40 w-[500px] h-[620px] rounded-2xl' src={restauranfood} alt="restaurant food" />
      </section>
      <section className=' pt-60 h-auto '>
        <div className='flex justify-between px-96 mb-40'>
          <h2 className=' text-blacklim font-Markazy font-medium text-[64px]'>Specials</h2>
          <button className='w-[250px] p-6 rounded-full text-blacklim font-Karla font-bold text-2xl bg-yellowlim'>Online menu</button>
        </div>
        <div className='flex justify-between px-48 pb-14 '>
          {
            dataSpecial.map((element, index) => (
              <SpecialCard
                image = {element.image}
                title = {element.title}
                message={element.message}
                key={index}
              />
            ))
          }
        </div>
      </section>
      <section className=' bg-greenlim'>
        <div className=' text-yellowlim font-Markazy font-semibold text-[76px] text-center py-16'>Testimonials</div>
        <div className='flex justify-between px-28 pb-10'>
          {
            dataTestimonial.map((element, index) => (
              <TestimonialCard
                image = {element.image}
                name = {element.name}
                message = {element.message}
                key={index}
              />
            ))
          }
        </div>
      </section>
      <section className='flex justify-around mt-20 pb-10 border-b-blacklim border-b-8'>
        <div className='w-[500px]'>
          <h1 className=' text-blacklim font-Markazy font-bold text-[64px]'>Little Lemon</h1>
          <span className=' text-blacklim font-Markazy font-medium text-[40px]'>Chicago</span>
          <p className=' text-blacklim font-Karla font-light text-[26px] pb-12 w-[650px] '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.
          </p>
        </div>
        <div className='relative w-[576px] h-[576px]'>
          <img className='w-96 h-96 absolute top-0 right-0' src={chefs} alt="chefs" />
          <img className='w-80 h-80 absolute bottom-0 left-0' src={restaurant} alt="restaurant" />
        </div>
      </section>
    </div>
  )
}

export default Main
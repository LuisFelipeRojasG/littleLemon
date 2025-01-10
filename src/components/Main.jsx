import React, { useState } from 'react'
import restauranfood from '../assets/image/restauranfood.jpg'
import SpecialCard from './SpecialCard'
import { dataSpecial, dataTestimonial } from '../data/dataCard.js'
import TestimonialCard from './TestimonialCard.jsx'
import chefs from '../assets/image/chefs.jpg'
import restaurant from '../assets/image/restaurant.jpg'
import { useNavigate } from 'react-router-dom'


function Main() {

  const navigate = useNavigate()

  return (
    <div id='main'>
      <section className='w-screen'>
        <div className='flex flex-col items-center md:items-start w-screen py-10 md:px-40 bg-greenlim '>
          <h1 className=' text-yellowlim font-Markazy font-medium text-[64px]'>Little Lemon</h1>
          <span className=' text-whitelim font-Markazy font-light text-[40px]'>Chicago</span>
          <p className='w-[420px] text-whitelim font-Karla font-light text-[26px] text-justify pb-12 md:w-[420px] '>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className='w-[250px] p-6 rounded-full text-blacklim font-Karla font-bold text-2xl bg-yellowlim ' onClick={() => navigate('/booking')}>Reserve a Table</button>
        </div>
        <img className='hidden md:block md:absolute md:top-52 md:right-40 md:w-[500px] md:h-[620px] md:rounded-2xl' src={restauranfood} alt="restaurant food" />
      </section>
      <section className='w-screen pt-28 md:pt-64 h-auto '>
        <div className='w-screen flex flex-col items-center md:flex-row md:justify-between md:px-96 mb-40'>
          <h2 className=' text-blacklim font-Markazy font-medium text-[64px]'>Specials</h2>
          <button className='w-[250px] p-6 rounded-full text-blacklim font-Karla font-bold text-2xl bg-yellowlim' aria-disabled='true'>Online menu</button>
        </div>
        <div className='w-screen flex flex-col items-center md:flex-row md:justify-between md:px-16 pb-14 '>
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
      <section className='w-screen bg-greenlim'>
        <div className='w-screen text-yellowlim font-Markazy font-semibold text-[76px] text-center py-16'>Testimonials</div>
        <div className='w-screen flex flex-col items-center md:flex-row md:justify-between md:px-10 pb-10'>
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
      <section className='w-screen flex flex-col items-center md:flex-row md:justify-around mt-20 pb-10'>
        <div className='w-auto'>
          <h1 className=' text-blacklim font-Markazy font-bold text-[64px]'>Little Lemon</h1>
          <span className=' text-blacklim font-Markazy font-medium text-[40px]'>Chicago</span>
          <p className=' w-[400px] md:w-[650px] pb-12 text-blacklim font-Karla font-light text-[26px] text-justify '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.
          </p>
        </div>
        <div className='flex items-center md:relative md:w-[576px] md:h-[576px]'>
          <img className='w-96 h-96 md:top-0 md:right-0 md:absolute' src={chefs} alt="chefs" />
          <img className='hidden md:block w-80 h-80 absolute bottom-0 left-0' src={restaurant} alt="restaurant" />
        </div>
      </section>
    </div>
  )
}

export default Main
import React from 'react'
import restauranfood from '../assets/image/restauranfood.jpg'
import SpecialCard from './SpecialCard'
import data from '../data/dataCard.js'

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
          <button className='w-[250px] p-6 rounded-full text-blacklim font-Karla font-bold text-2xl bg-yellowlim '>Online menu</button>
        </div>
        <div className='flex justify-between px-48 pb-14 '>
          {
            data.map((element, index) => (
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
      <section className=' bg-greenlim'>detras</section>
      <section className=' '>de</section>
      Main
    </div>
  )
}

export default Main
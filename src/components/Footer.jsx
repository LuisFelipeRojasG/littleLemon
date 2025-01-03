import React from 'react'
import Logo from '../assets/image/Logo.svg'

function Footer() {
    return (
        <div className='flex flex-row pb-10 border-b-blacklim border-t-8'>
            <img className=' mx-20 my-20 w-52 basis-1/4' src={Logo} alt="Little Lemon" />
            <section className='basis-3/4 grid grid-cols-3 gap-10 pr-40'>
                <article className='px-20'>
                    <h2 className=' font-Markazy text-4xl text-blacklim font-semibold py-10'>
                        Navigation
                    </h2>
                    <ul className=' font-Karla text-xl text-blacklim font-medium'>
                        <li className='flex flex-col'>
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Menu</a>
                            <a href="">Reservations</a>
                            <a href="">Order online</a>
                            <a href="">Login</a>
                        </li>
                    </ul>
                </article>
                <article className='px-20'>
                    <h2 className=' font-Markazy text-4xl text-blacklim font-semibold py-10'>
                        Contact
                    </h2>
                    <ul className=' font-Karla text-xl text-blacklim font-medium'>
                        <li className='flex flex-col'>
                            <a href="">Phone Number</a>
                            <a href="">Email</a>
                            <a href="">Address</a>
                        </li>
                    </ul>
                </article>
                <article className='px-20'>
                    <h2 className=' font-Markazy text-4xl text-blacklim font-semibold py-10'>
                        Social Media
                    </h2>
                    <ul className=' font-Karla text-xl text-blacklim font-medium'>
                        <li className='flex flex-col'>
                            <a href="">Instagram</a>
                            <a href="">Linkedin</a>
                            <a href="">Pinterest</a>
                        </li>
                    </ul>
                </article>
            </section>
        </div>
    )
}

export default Footer
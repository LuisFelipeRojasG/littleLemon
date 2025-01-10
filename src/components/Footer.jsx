import React from 'react'
import Logo from '../assets/image/Logo.svg'

function Footer() {
    return (
        <div className='w-screen flex flex-col items-center md:flex-row pb-10 border-b-blacklim border-t-8'>
            <img className=' md:mx-20 my-20 w-72 md:w-52 basis-1/4' src={Logo} alt="Little Lemon" />
            <section className='basis-3/4 grid md:grid-cols-3 gap-10 md:pr-40'>
                <article className='md:px-20'>
                    <h2 className=' font-Markazy text-7xl md:text-4xl text-blacklim font-semibold py-10'>
                        Navigation
                    </h2>
                    <ul role='menu' className=' font-Karla text-3xl md:text-xl text-blacklim font-medium'>
                        <li role='menuitem'><a href="">Home</a></li>
                        <li role='menuitem'><a href="">About</a></li>
                        <li role='menuitem'><a href="">Menu</a></li>
                        <li role='menuitem'><a href="">Reservations</a></li>
                        <li role='menuitem'><a href="">Order online</a></li>
                        <li role='menuitem'><a href="">Login</a></li>
                    </ul>
                </article>
                <article className='md:px-20'>
                    <h2 className=' font-Markazy text-7xl md:text-4xl text-blacklim font-semibold py-10'>
                        Contact
                    </h2>
                    <ul role='menu' className=' font-Karla text-3xl md:text-xl text-blacklim font-medium'>
                        <li role='menuitem'><a href="">Phone Number</a></li>
                        <li role='menuitem'><a href="">Email</a></li>
                        <li role='menuitem'><a href="">Address</a></li>
                    </ul>
                </article>
                <article className='md:px-20'>
                    <h2 className=' font-Markazy text-7xl md:text-4xl text-blacklim font-semibold py-10'>
                        Social Media
                    </h2>
                    <ul role='menu' className=' font-Karla text-3xl md:text-xl text-blacklim font-medium'>
                        <li role='menuitem'><a href="">Instagram</a></li>
                        <li role='menuitem'><a href="">Linkedin</a></li>
                        <li role='menuitem'><a href="">Pinterest</a></li>
                    </ul>
                </article>
            </section>
        </div>
    )
}

export default Footer
import React from 'react'
import { NavLink } from "react-router-dom"
import Logo from '../assets/image/Logo.svg'

function Footer() {
    return (
        <div className='w-screen flex flex-col items-center xl:flex-row pb-10 border-b-blacklim border-t-8'>
            <img className=' lg:mx-20 my-20 w-72 lg:w-52 basis-1/4' src={Logo} alt="Little Lemon" />
            <section className='basis-3/4 flex flex-col md:flex-row justify-center lg:grid lg:grid-cols-3 gap-10 '>
                <article className='lg:px-20'>
                    <h2 className=' font-Markazy text-7xl md:text-4xl text-blacklim font-semibold py-10'>
                        Navigation
                    </h2>
                    <ul role='menu' className=' font-Karla text-3xl md:text-xl text-blacklim font-medium'>
                        <li role='menuitem'>
                            <NavLink role='menuitem' to={'/littleLemon'} >Home</NavLink>
                        </li>
                        <li role='menuitem'>
                            <NavLink role='menuitem' to={'/littleLemon'} >About</NavLink>
                        </li>
                        <li role='menuitem'>
                            <NavLink role='menuitem' to={'/littleLemon'} >Menu</NavLink>
                        </li>
                        <li role='menuitem'>
                            <NavLink role='menuitem' to={'/booking'}>Reserv Table</NavLink>
                        </li>
                        <li role='menuitem'>
                            <NavLink role='menuitem' to={'/reservations'}>Reservations</NavLink>
                        </li>
                    </ul>
                </article>
                <article className='lg:px-20'>
                    <h2 className=' font-Markazy text-7xl md:text-4xl text-blacklim font-semibold py-10'>
                        Contact
                    </h2>
                    <ul role='menu' className=' font-Karla text-3xl md:text-xl text-blacklim font-medium'>
                        <li role='menuitem'><a href="">Phone Number</a></li>
                        <li role='menuitem'><a href="">Email</a></li>
                        <li role='menuitem'><a href="">Address</a></li>
                    </ul>
                </article>
                <article className='lg:px-20'>
                    <h2 className=' font-Markazy text-7xl md:text-4xl text-blacklim font-semibold py-10'>
                        Social Media
                    </h2>
                    <ul role='menu' className=' font-Karla text-3xl md:text-xl text-blacklim font-medium'>
                        <li role='menuitem'><a href="">Instagram</a></li>
                        <li role='menuitem'><a href="">Facebook</a></li>
                        <li role='menuitem'><a href="">x</a></li>
                    </ul>
                </article>
            </section>
        </div>
    )
}

export default Footer
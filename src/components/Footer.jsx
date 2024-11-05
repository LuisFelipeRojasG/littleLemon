import React from 'react'
import Logo from '../assets/image/Logo.svg'

function Footer() {
    return (
        <div className='flex flex-row pb-10'>
            <img className=' mx-20 my-20 w-52 basis-1/4' src={Logo} alt="Little Lemon" />
            <section className='basis-3/4 flex flex-row justify-between pr-40'>
                <article className='navigation'>
                    <h2 className=' font-Markazy text-4xl text-blacklim font-semibold py-10'>
                        Navigation
                    </h2>
                    <ul className=' font-Karla text-xl text-blacklim font-medium'>
                        <il className='flex flex-col'>
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Menu</a>
                            <a href="">Reservations</a>
                            <a href="">Order online</a>
                            <a href="">Login</a>
                        </il>
                    </ul>
                </article>
                <article className='contact'>
                    <h2 className=' font-Markazy text-4xl text-blacklim font-semibold py-10'>
                        Contact
                    </h2>
                    <ul className=' font-Karla text-xl text-blacklim font-medium'>
                        <il className='flex flex-col'>
                            <a href="">Phone Number</a>
                            <a href="">Email</a>
                            <a href="">Address</a>
                        </il>
                    </ul>
                </article>
                <article className='social'>
                    <h2 className=' font-Markazy text-4xl text-blacklim font-semibold py-10'>
                        Social Media
                    </h2>
                    <ul className=' font-Karla text-xl text-blacklim font-medium'>
                        <il className='flex flex-col'>
                            <a href="">Instagram</a>
                            <a href="">Linkedin</a>
                            <a href="">Pinterest</a>
                        </il>
                    </ul>
                </article>
            </section>
        </div>
    )
}

export default Footer
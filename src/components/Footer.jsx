import React from 'react'
import Logo from '../assets/image/Logo.svg'
import '../styles/footer.css'

function Footer() {
    return (
        <div className='footerContainer'>
            <img src={Logo} alt="Little Lemon" />
            <article className='navigation'>
                <h2>
                    Navigation
                </h2>
                <ul>
                    <il>
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
                <h2>
                    Contact
                </h2>
                <ul>
                    <il>
                        <a href="">Phone Number</a>
                        <a href="">Email</a>
                        <a href="">Address</a>
                    </il>
                </ul>
            </article>
            <article className='social'>
                <h2>
                    Social Media
                </h2>
                <ul>
                    <il>
                        <a href="">Instagram</a>
                        <a href="">Linkedin</a>
                        <a href="">Pinterest</a>
                    </il>
                </ul>
            </article>
        </div>
    )
}

export default Footer
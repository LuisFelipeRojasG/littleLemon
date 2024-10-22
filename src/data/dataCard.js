import greekSalad from '../assets/image/greek_salad.jpg'
import bruschetta from '../assets/image/bruschetta.png'
import lemondessert from '../assets/image/lemon_dessert.jpg'
import perfil01 from '../assets/image/perfil01.jpg'
import perfil02 from '../assets/image/perfil02.jpg'
import perfil03 from '../assets/image/perfil03.jpg'
import perfil04 from '../assets/image/perfil04.jpg'

const dataSpecial = [
    {
        image: greekSalad,
        title: 'Greek Salad',
        message: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
        image: bruschetta,
        title: 'Bruschetta',
        message: 'Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.'
    },
    {
        image: lemondessert,
        title: 'Lemon Cake',
        message: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
    }
]

const dataTestimonial = [
    {        
        image: perfil01,
        name: 'Selena G.',
        message: 'Really enjoyed the atmosphere.'
    },
    {
        image: perfil02,
        name: 'Brandon M.',
        message: 'The greek salad was excellent!'
    },
    {
        image: perfil03,
        name: 'Peter R.',
        message: 'You have to try the Greek Salad!'
    },
    {
        image: perfil04,
        name: 'Neha J.',
        message: 'Awesome place peaceful atmosphere with delicious food'
    },
]

export {dataSpecial, dataTestimonial}

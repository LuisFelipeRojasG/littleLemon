import instance from './axios.js'

const reservRequest = (data) => instance.post('/reservation', data)
const reservFind = () => instance.get('/reservations')

export { reservRequest, reservFind }

import instance from './axios.js'

const reservRequest = (data) => instance.post('/reservation', data)

export { reservRequest }

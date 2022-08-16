import axios from 'axios'

const token = localStorage.getItem('@clinicaToken') || ''

const api = axios.create({
    baseURL:'http://localhost:8000/',
    //headers:{'authorization': `Bearer ${token}`}
})

export default api
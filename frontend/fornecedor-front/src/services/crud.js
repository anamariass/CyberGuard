import axios from 'axios'

const crud = axios.create({
    baseURL: 'http://localhost:3000'
})

export default crud

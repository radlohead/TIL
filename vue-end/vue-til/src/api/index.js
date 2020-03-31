import axios from 'axios'

function createInstance() {
    const instance = axios.create({
        baseURL: process.env.VUE_APP_API_URL
    })
    return instance
}

export const instance = createInstance()

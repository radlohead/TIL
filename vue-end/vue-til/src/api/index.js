import axios from 'axios'

function createInstance() {
    const instance = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        timeout: 3000
    })
    return setInterceptors(instance)
}
function setInterceptors(instance) {
    instance.interceptors.request.use(
        function(config) {
            config.headers.CustomHeader = 'foobar'
            return config
        },
        function(error) {
            return Promise.reject(error)
        }
    )
    return instance
}

export const instance = createInstance()

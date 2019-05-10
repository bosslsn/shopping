import axios from 'axios'

const request = axios.create({
  baseURL: '/',
  timeout: 2000
})

axios.get = (url, data) => request.get(url, {
  params: data
})

axios.post = (url, data) => request.post(url, data)

// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
request.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default axios

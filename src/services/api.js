import axios from 'axios'
import { toast } from 'react-toastify'

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3001'
})

apiCodeBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:user')
  const token = userData && JSON.parse(userData).token
  config.headers.Authorization = `Bearer ${token}`
  return config
})

apiCodeBurger.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response?.status === 401) {
      toast.error('Ocorreu um erro com sua autenticação! Tente novamente.')

      localStorage.removeItem('codeburger:user')

      setTimeout(() => {
        window.location.href = '/login'
      }, 2000)
    } else {
      toast.error('Falha no sistema! Tente novamente.')
    }
    return Promise.reject(error)
  }
)
export default apiCodeBurger

import axios from 'axios'

const api = axios.create({
  withCredentials: true,
})

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       // Session expired, log out user and redirect to login
//       // await api.post('/auth/logout').catch(() => {})
//       api
//         .post('/auth/logout')
//         .then(() => {
//           console.log('Logged out')
//         })
//         .catch(() => {})
//       window.location.href = '/login'
//     }
//     return Promise.reject(error)
//   },
// )

export default api

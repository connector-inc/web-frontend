import axios from 'axios'

const api = axios.create({
  withCredentials: true,
})

// let isRefreshing = false
// let refreshSubscribers: (() => void)[] = []

// const onRefreshed = () => {
//   refreshSubscribers.forEach((callback) => callback())
//   refreshSubscribers = []
// }

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       if (isRefreshing) {
//         return new Promise((resolve) => {
//           refreshSubscribers.push(() => resolve(api(originalRequest)))
//         })
//       }

//       originalRequest._retry = true
//       isRefreshing = true

//       try {
//         await axios.post(
//           `${process.env.API_URL}/auth/refresh`,
//           {},
//           { withCredentials: true }, // Refresh request includes cookies
//         )

//         onRefreshed()
//         return api(originalRequest)
//       } catch (refreshError) {
//         console.error('Refresh token failed', refreshError)
//         return Promise.reject(refreshError)
//       } finally {
//         isRefreshing = false
//       }
//     }

//     return Promise.reject(error)
//   },
// )

export default api

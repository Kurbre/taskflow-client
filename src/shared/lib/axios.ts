import axios, { InternalAxiosRequestConfig } from 'axios'
import { isPublicRoute } from '../lib/is-public-route'

type AuthResponse = {
	accessToken: string
}

type RetryAxiosRequestConfig = InternalAxiosRequestConfig & {
	_retry?: boolean
}

export const axiosMain = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true
})

export const axiosServer = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true
})

axiosMain.interceptors.request.use(config => {
	const token = localStorage.getItem('accessToken')

	if (token) config.headers.Authorization = `Bearer ${token}`

	return config
})

axiosMain.interceptors.response.use(
	response => response,
	async error => {
		const originalRequest = error.config as RetryAxiosRequestConfig | undefined

		if (!originalRequest) {
			return Promise.reject(error)
		}

		const isUnauthorized = error.response?.status === 401
		const isRefreshRequest = originalRequest.url?.includes('/auth/refresh')

		if (originalRequest._retry || isPublicRoute(originalRequest.url)) {
			return Promise.reject(error)
		}

		if (isUnauthorized && !isRefreshRequest) {
			originalRequest._retry = true

			try {
				const { data } = await axiosMain.post<AuthResponse>('/auth/refresh')

				localStorage.setItem('accessToken', data.accessToken)

				originalRequest.headers.Authorization = `Bearer ${data.accessToken}`

				return axiosMain(originalRequest)
			} catch (refreshError) {
				localStorage.removeItem('accessToken')

				return Promise.reject(refreshError)
			}
		}

		return Promise.reject(error)
	}
)

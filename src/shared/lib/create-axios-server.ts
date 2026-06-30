import axios from 'axios'
import { cookies } from 'next/headers'

export const createAxiosServer = async () => {
	const cookiesStore = await cookies()

	return axios.create({
		baseURL: process.env.NEXT_PUBLIC_API_URL,
		withCredentials: true,
		headers: {
			Cookie: cookiesStore.toString()
		}
	})
}

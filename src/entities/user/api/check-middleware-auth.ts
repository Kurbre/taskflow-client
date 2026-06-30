import axios from 'axios'
import { NextRequest } from 'next/server'
import { User } from '../model/types'

export const checkMiddlewareAuth = async (cookieHeader: string) => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/users/me`,
			{
				method: 'GET',
				headers: {
					Cookie: cookieHeader
				},
				cache: 'no-store'
			}
		)

		if (!response.ok) {
			return false
		}

		const data = (await response.json()) as User

		console.log(data)

		return !!data.id
	} catch (e) {
		console.log(e)

		return false
	}
}
